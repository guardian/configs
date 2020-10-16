module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',

		// https://mysticatea.github.io/eslint-plugin-eslint-comments
		'plugin:eslint-comments/recommended',

		'prettier',
	],
	rules: {
		// require an explanation if you disable eslint
		'eslint-comments/require-description': 2,

		'import/no-default-export': 2,
		'import/prefer-default-export': 0,
		'import/first': 2,

		// fixable import formatting, designed to minimise diff noise
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
			},
		],
		'import/newline-after-import': 2,
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'unknown',
				],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
}
