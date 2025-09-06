// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import gitignore from 'eslint-config-flat-gitignore';
import tseslint from 'typescript-eslint';

export default defineConfig(
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
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
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
);
