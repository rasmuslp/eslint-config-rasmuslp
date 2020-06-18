module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:promise/recommended', // This may be too much?
		'standard'
	],
	plugins: [
		'node'
	],
	rules: {
		// Possible Errors
		'getter-return': 'error',
		'no-console': 'warn',

		// Best Practices
		'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
		curly: 'error',
		'default-case': 'error',
		'require-await': 'error',

		// Variables

		// Node
		'callback-return': 'off',
		'node/callback-return': 'error', // Migrated from ESLint in ESLint 7

		// Stylistic
		'brace-style': ['error', 'stroustrup'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-lonely-if': 'error',
		'no-nested-ternary': 'error',
		'no-tabs': 'off',
		'quote-props': ['error', 'as-needed'],
		semi: ['error', 'always'],
		'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }]
	}
};
