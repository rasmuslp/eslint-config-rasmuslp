# @rasmuslp/eslint-config

[![NPM package](https://img.shields.io/npm/v/@rasmuslp/eslint-config.svg)](https://www.npmjs.com/package/@rasmuslp/eslint-config)
[![Github: CI CD](https://github.com/rasmuslp/eslint-config-rasmuslp/workflows/CI%20CD/badge.svg)](https://github.com/rasmuslp/eslint-config-rasmuslp/actions)

This configuration is based on [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript), but with a few tweaks and most notibly:
* indentation: tab

## Configurations
This project provides both a JavaScript and a TypeScript configuration file. **Defaults to** TypeScript.

## Installation
Install the config:
```bash
$ npm install --save-dev @rasmuslp/eslint-config
```

### NB: For npm 6 the peer dependencies also needs to be installed manually.

See peer dependencies:
```bash
$ npm info "@rasmuslp/eslint-config@latest" peerDependencies
```

Automatically install peer dependencies:
```bash
$ npx install-peerdeps --dev @rasmuslp/eslint-config
```

## Usage
Configure eslint in your project by extending this configuration in your local `.eslintrc.json`
```json
{
	"root": true,
	"parserOptions": {
		"project": "./tsconfig.eslint.json"
	},
	"extends": [
		"@rasmuslp"
	]
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
		"node": ">=16.13.0"
	}
```

### TypeScript and React
Install additional dependencies
```bash
$ npm install --save-dev eslint-config-airbnb
```

Configure eslint in your project by extending this configuration in your local `.eslintrc.json`
```json
{
	"root": true,
	"extends": [
		// Load broader rules first
		"airbnb",
		"airbnb-typescript",
		// Then override with more specific rule set
		"@rasmuslp/eslint-config/src/typescript-react"
	]
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
