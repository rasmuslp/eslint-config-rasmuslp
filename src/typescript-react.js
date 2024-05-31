// NB: This is based on eslint-config-airbnb-typescript/index.js - i.e. the React rule set

module.exports = {
	extends: [require.resolve('./typescript')],
	settings: {
		// Append 'ts' extensions to Airbnb 'import/resolver' setting
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts']
			}
		}
	},
	rules: {
		// Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

		'n/no-missing-import': ['error', {
			tryExtensions: [
				'.js',
				'.ts',
				'.mjs',
				'.mts',
				'.cjs',
				'.cts',
				'.json',
				'.node',
				'.jsx',
				'.tsx'
			]
		}],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab']
	}
};
