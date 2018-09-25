module.exports = {
	extends: [
		'eslint:recommended',
		'standard'
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
		'callback-return': 'error',

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
