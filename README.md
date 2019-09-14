# @rasmuslp/eslint-config

[![NPM package](https://img.shields.io/npm/v/@rasmuslp/eslint-config.svg)](https://www.npmjs.com/package/@rasmuslp/eslint-config)
[![CircleCI](https://circleci.com/gh/rasmuslp/eslint-config-rasmuslp.svg?style=shield)](https://circleci.com/gh/rasmuslp/eslint-config-rasmuslp)
[![Github: Node CI/CD](https://github.com/rasmuslp/eslint-config-rasmuslp/workflows/.github/workflows/nodecicd.yml/badge.svg)](https://github.com/rasmuslp/eslint-config-rasmuslp/actions)

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
$ npm install --save-dev @rasmuslp/eslint-config
$ npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

Configure eslint in your project by extending this configuration in your local `.eslintrc.json`
```json
{
    "root": true,
    "extends": "@rasmuslp"
}
```
