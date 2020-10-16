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
	rules: {
		/*
		FIXABLE STYLISTIC CHOICES THAT DIFFER FROM THE DEFAULT
		The intention is to maximise clarity and consistency,
		not direct or inhibit what can be done with code.
		*/

		// use `Array<string>` instead of `string[]`
		'@typescript-eslint/array-type': ['error', 'generic'],

		// use `Record<string, unknown>` instead of `{ [key: string]: unknown }`
		'@typescript-eslint/consistent-indexed-object-style': [
			'error',
			'record',
		],

		// be explicit when you only want to import a type:
		// `import type { Foo } from 'Foo';`
		'@typescript-eslint/consistent-type-imports': 'prefer',

		// delimit members with semi-colons and require
		// one at the end to keep diffs simpler
		'@typescript-eslint/member-delimiter-style': {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: true,
			},
		},

		// use `(1 + foo.num!) == 2` instead of `1 + foo.num! == 2`
		'@typescript-eslint/no-confusing-non-null-assertion': 2,

		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
		'@typescript-eslint/no-unnecessary-condition': 2,
		'@typescript-eslint/no-unnecessary-qualifier': 2,
		'@typescript-eslint/no-unnecessary-type-arguments': 2,

		// use `str.includes(value)` instead of `str.indexOf(value) !== -1`
		'@typescript-eslint/prefer-includes': 2,

		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
		'@typescript-eslint/prefer-reduce-type-parameter': 2,

		/*
		NOT FIXABLE BUT USEFUL
		*/

		// use `foo ?? 'a string'` instead of `foo !== null && foo !== undefined ? foo : 'a string'`
		'@typescript-eslint/prefer-nullish-coalescing': 2,

		// use `a?.b` instead of `a && a.b`
		'@typescript-eslint/prefer-optional-chain': 2,
	},
};
