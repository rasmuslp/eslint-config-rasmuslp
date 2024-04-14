const airbnbTypeScript = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
	env: {
		es2023: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true
	},
	extends: [
		'eslint:recommended',
		'plugin:deprecation/recommended',
		'plugin:n/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'airbnb-base',
		'airbnb-typescript/base'
	],
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'@typescript-eslint/brace-style': ['error', 'stroustrup', {
			allowSingleLine: false
		}],
		'@typescript-eslint/comma-dangle': ['error', 'never'],
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/indent': ['error', 'tab', airbnbTypeScript.rules['@typescript-eslint/indent'][2]],
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/method-signature-style': ['error', 'method'],
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/restrict-template-expressions': ['error', {
			allowNumber: true
		}],
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
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					orderImportKind: 'desc',
					caseInsensitive: true
				},
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '@/**',
						group: 'external',
						position: 'after'
					}
				]
			}
		],
		'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
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
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true
			}
		],
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
	},
	reportUnusedDisableDirectives: true
};
