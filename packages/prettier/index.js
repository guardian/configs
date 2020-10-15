module.exports = {
	arrowParens: "always",
	bracketSpacing: true,
	jsxBracketSameLine: false,
	jsxSingleQuote: false,
	overrides: [
		{
			files: "*.md",
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
	printWidth: 80,
	quoteProps: "as-needed",
	semi: true,
	singleQuote: true,
	trailingComma: "all",
	useTabs: true,
};
