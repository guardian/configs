module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'es2020',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'@guardian/eslint-config',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'prettier/@typescript-eslint',
	],
	settings: {
		'import/extensions': ['.ts', '.tsx'],
	},
};
