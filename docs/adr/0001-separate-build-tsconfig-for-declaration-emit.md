# Separate build tsconfig for declaration emit

To ship TypeScript types, we generate `src/index.d.ts` from the JSDoc-typed source. The emit is driven by a dedicated `tsconfig.build.json` (`extends` the base, `include: ["src"]`, `emitDeclarationOnly`) rather than the base `tsconfig.json`.

The base `tsconfig.json` is for **type-checking only** (the editor and eslint's `projectService`); it sets `noEmit: true`. The build config is the **only** thing that emits, overriding `noEmit: false` + `emitDeclarationOnly: true`.

Two independent reasons force this split:

1. **Wide `include` is required for linting.** The base keeps `include: ["**/*.js", "**/*.ts"]` so typed linting covers root-level config files such as `commitlint.config.ts`. Narrowing it to `src` evicts those files from the TS project, breaking their typed linting with "was not found by the project service". (Root `*.{js,mjs,cjs}` files are unaffected because the shared config already opts them out via `disableTypeChecked` — but `.ts` config files are not.) Yet emitting with that wide `include` would write `.d.ts` files next to every root config file — junk in the working tree. So the emit needs a narrower `include` than the check.

2. **`allowJs` + `declaration` would overwrite source.** The project lints `.js` files (`allowJs: true`). Running a plain emit over the base config fails with `TS5055` ("Cannot write file … because it would overwrite input file"), since the output path of a `.js` input collides with the input itself. `noEmit: true` on the base avoids this; the build config sidesteps it by emitting declarations only.

Therefore the two configs serve different jobs and cannot be collapsed into one. Do not "simplify" by narrowing the base `include`, dropping `noEmit`, or running emit from the base config.
