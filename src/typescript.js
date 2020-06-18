const common = require('./common');

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		...common.extends,
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
		// "plugin:@typescript-eslint/recommended-requiring-type-checking"
	],
	plugins: [
		...common.plugins,
		'@typescript-eslint'
	],
	rules: {
		...common.rules,

		'@typescript-eslint/no-explicit-any': 'off',
		'no-console': 'off',
		'no-multiple-empty-lines': 'warn', // Having uncomitted blocks is common when developing, and then this rule gets tricky
		'no-return-await': 'off', // So... Its nice to know if the function is async or not
		// "require-await": "off",
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/indent': ['error', 'tab']
	}
};
