module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['next', 'prettier', 'eslint:recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'off',
	},
};
