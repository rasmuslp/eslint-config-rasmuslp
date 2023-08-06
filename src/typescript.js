const airbnbTypeScript = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
	env: {
		es2017: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2017,
		project: './tsconfig.json'
	},
	extends: [
		'eslint:recommended',
		'plugin:deprecation/recommended',
		'plugin:n/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'airbnb-base',
		'airbnb-typescript/base'
	],
	plugins: [
		'@typescript-eslint',
		'promise'
	],
	rules: {
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/brace-style': ['error', 'stroustrup', {
			allowSingleLine: false
		}],
		'@typescript-eslint/comma-dangle': ['error', 'never'],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/indent': ['error', 'tab', airbnbTypeScript.rules['@typescript-eslint/indent'][2]],
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/method-signature-style': ['error', 'method'],
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/return-await': ['error', 'in-try-catch'],
		'@typescript-eslint/space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'arrow-parens': ['error', 'as-needed'],
		'class-methods-use-this': 'off',
		'consistent-return': ['error', {
			treatUndefinedAsUnspecified: false
		}],
		curly: ['error', 'all'],
		'function-paren-newline': ['error', 'multiline'],
		'import/prefer-default-export': 'off',
		'max-len': 'off',
		'no-await-in-loop': 'off',
		'no-continue': 'off',
		'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
		'no-plusplus': ['error', {
			allowForLoopAfterthoughts: true
		}],
		'no-restricted-syntax': 'off',
		'no-tabs': 'off',
		'no-void': 'off',
		'n/callback-return': 'error',
		'n/no-missing-import': ['error', {
			// tryExtensions: ['.js', '.d.ts', '.ts'] // https://github.com/eslint-community/eslint-plugin-n/issues/33
		}],
		'n/no-unsupported-features/es-syntax': ['error', {
			ignores: [
				'modules'
			]
		}],
		'unicorn/consistent-destructuring': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prefer-node-protocol': 'off', // conflicts with node/no-missing-import
		'unicorn/prevent-abbreviations': ['error', {
			replacements: {
				args: false,
				fn: false,
				func: {
					fn: true
				},
				i: false,
				j: false
			}
		}]
	}
};
