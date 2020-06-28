const common = require('./common');

module.exports = {
	parser: '@typescript-eslint/parser',
	settings: {
		node: {
			tryExtensions: [
				'.js',
				'.ts',
				'.json'
			]
		}
	},
	extends: [
		...common.extends,
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	plugins: [
		...common.plugins,
		'@typescript-eslint'
	],
	rules: {
		...common.rules,
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'no-multiple-empty-lines': 'warn', // Having uncomitted blocks is common when developing, and then this rule gets tricky
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/indent': ['error', 'tab']
	}
};
