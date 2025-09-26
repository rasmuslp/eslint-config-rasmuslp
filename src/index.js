// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import gitignore from 'eslint-config-flat-gitignore';
import { importX } from 'eslint-plugin-import-x';
import pluginPromise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { configs as tseslintConfig } from 'typescript-eslint';

export async function eslintConfigRasmuslp({ withJest = false } = {}) {
	const config = [
		gitignore(),
		eslint.configs.recommended,
		{
			extends: [tseslintConfig.strictTypeChecked, tseslintConfig.stylisticTypeChecked],
			languageOptions: {
				parserOptions: {
					projectService: true,
				},
			},
		},
		importX.flatConfigs.recommended,
		importX.flatConfigs.typescript,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		pluginPromise.configs['flat/recommended'],
		eslintPluginUnicorn.configs.recommended,
		{
			rules: {
				// eslint
				curly: ['error', 'all'],
				'sort-imports': [
					'error',
					{
						ignoreDeclarationSort: true,
					},
				],

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

				'unicorn/filename-case': 'off',
				'unicorn/no-null': 'off',
				'unicorn/prevent-abbreviations': [
					'error',
					{
						replacements: {
							args: false,
							fn: false,
							func: {
								fn: true,
							},
							i: false,
							j: false,
						},
					},
				],
			},
		},
	];

	if (withJest) {
		const jestPluginModule = await import('eslint-plugin-jest');
		const jestPlugin = jestPluginModule.default;
		config.push(jestPlugin.configs['flat/recommended'], jestPlugin.configs['flat/style']);
	}

	return defineConfig(config);
}

export default await eslintConfigRasmuslp();
