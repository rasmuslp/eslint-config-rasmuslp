# @rasmuslp/eslint-config

[![NPM package](https://img.shields.io/npm/v/@rasmuslp/eslint-config.svg)](https://www.npmjs.com/package/@rasmuslp/eslint-config)
[![Github: CI CD](https://github.com/rasmuslp/eslint-config-rasmuslp/workflows/CI%20CD/badge.svg)](https://github.com/rasmuslp/eslint-config-rasmuslp/actions)

This configuration is based on [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript), but with a few tweaks and most notibly:
* indentation: tab

## Configurations
This project provides both a JavaScript and a TypeScript configuration file. **Defaults to** TypeScript.

## Installation & usage
Install this config and its peer dependencies:
```bash
$ npm install --save-dev @rasmuslp/eslint-config
$ npm install --save-dev \
		@typescript-eslint/eslint-plugin@4 \
		eslint@7 \
		eslint-plugin-deprecation@1 \
		eslint-plugin-eslint-comments@3 \
		eslint-plugin-import@2 \
		eslint-plugin-node@11 \
		eslint-plugin-promise5 \
		eslint-plugin-unicorn@25 \
		typescript@4
```

Configure eslint in your project by extending this configuration in your local `.eslintrc.json`
```json
{
	"root": true,
	"parserOptions": {
		"project": "./tsconfig.eslint.json"
	},
	"extends": "@rasmuslp"
}
```
The TypeScript config is utilized by certain rules that require type information.


To lint all project files, besides what the default `tsconfig` does, add `tsconfig.eslint.json` with:
```json
{
	"extends": "./tsconfig.json",
	"include": ["./"]
}
```

Lastly, specify the minimum supported Node version in `package.json` to enable checks for using unsupported Node features.
```json
	"engines": {
		"node": ">=10.13.0"
	}
```

### JavaScript
You can omit installing `@typescript-eslint/eslint-plugin` and `typescript`, but you will get warnings about missing peer dependencies.

Configure eslint in your project by extending this configuration in your local `.eslintrc.json`
```json
{
	"root": true,
	"extends": "@rasmuslp/eslint-config/src/javascript"
}
```
