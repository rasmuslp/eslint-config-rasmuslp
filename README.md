# eslint-config-rasmuslp

[![CircleCI](https://circleci.com/gh/rasmuslp/eslint-config-rasmuslp.svg?style=shield)](https://circleci.com/gh/rasmuslp/eslint-config-rasmuslp)

This configuration is based on [https://github.com/standard/eslint-config-standard](https://github.com/standard/eslint-config-standard), but with some notable changes:
* indentation: tab
* semi: required

And a few other tweaks.

## Installation
Install eslint
```bash
$ npm install --save-dev eslint
```

Install this module, and the following dependencies:
```bash
$ npm install --save-dev https://github.com/rasmuslp/eslint-config-rasmuslp
$ npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Configure eslint in your project by extending this configuration in your local `.eslintrc.json`
```json
{
    "root": true,
    "extends": "rasmuslp"
}
```
