# @rasmuslp/eslint-config

[![NPM package](https://img.shields.io/npm/v/@rasmuslp/eslint-config.svg)](https://www.npmjs.com/package/@rasmuslp/eslint-config)
[![Github: CI CD](https://github.com/rasmuslp/eslint-config-rasmuslp/workflows/CI%20CD/badge.svg)](https://github.com/rasmuslp/eslint-config-rasmuslp/actions)

## Installation

Install the config:

```bash
npm install --save-dev @rasmuslp/eslint-config
```

## Usage

Configure eslint in your project by using this configuration in your local `eslint.config.js`

```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import rasmuslpConfig from '@rasmuslp/eslint-config';

export default defineConfig([rasmuslpConfig]);
```

Lastly, specify the minimum supported Node version in `package.json` to enable checks for using unsupported Node features.

```json
	"engines": {
		"node": ">=22.11.0"
	}
```
