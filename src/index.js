// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import gitignore from 'eslint-config-flat-gitignore';
import { importX } from 'eslint-plugin-import-x';
import { configs as tseslintConfig } from 'typescript-eslint';

export default defineConfig([
	gitignore(),
	{
		extends: [eslint.configs.recommended],
		rules: {
			curly: ['error', 'all'],
			'sort-imports': [
				'error',
				{
					ignoreDeclarationSort: true,
				},
			],
		},
	},
	{
		extends: [
			tseslintConfig.strictTypeChecked,
			tseslintConfig.stylisticTypeChecked,
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			'@typescript-eslint/consistent-type-exports': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/method-signature-style': ['error', 'property'],
			'@typescript-eslint/non-nullable-type-assertion-style': 'error',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
		},
	},
	{
		extends: [importX.flatConfigs.recommended, importX.flatConfigs.typescript],
		rules: {
			'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import-x/order': [
				'error',
				{
					alphabetize: {
						order: 'asc',
						orderImportKind: 'desc',
						caseInsensitive: true,
					},
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: '@/**',
							group: 'external',
							position: 'after',
						},
					],
				},
			],
		},
	},
]);
