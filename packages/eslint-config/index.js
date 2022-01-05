module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	...require('./configs/javascript'),
	overrides: [
		// typescript-specific config
		{
			files: ['**/*.ts', '**/*.tsx'],
			...require('./configs/typescript'),
		},
	],
};
