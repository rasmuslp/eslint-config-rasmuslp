exports.extends = [
	'eslint:recommended',
	'plugin:n/recommended',
	'plugin:promise/recommended',
	'plugin:unicorn/recommended'
];

exports.rules = {
	// Possible Errors
	'getter-return': 'error',
	'no-console': 'warn',

	// Best Practices
	'consistent-return': 'off',
	curly: 'error',
	'default-case': 'error',
	'no-void': 'off',
	'require-await': 'off',

	// Variables

	// Node
	'callback-return': 'off',
	'n/callback-return': 'error', // Migrated from ESLint in ESLint 7

	// Stylistic
	'brace-style': ['error', 'stroustrup'],
	'no-lonely-if': 'error',
	'no-nested-ternary': 'error',
	'no-tabs': 'off',
	'quote-props': ['error', 'as-needed'],
	semi: ['error', 'always'],
	'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],

	// Unicorn
	'unicorn/filename-case': 'off',
	'unicorn/prefer-module': 'off',
	'unicorn/prevent-abbreviations': [
		'error',
		{
			replacements: {
				fn: false,
				func: {
					fn: true
				},
				i: false,
				j: false
			}
		}
	]
};
