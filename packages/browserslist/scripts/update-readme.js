const browserslistStats = require('../browserslist-stats.json')

let table = `| Browser | Usage |
| ------- | ----- |`

/*
| Browser | Usage |
| ------- | ----- |
| Chrome 48 | 0% |

*/

const flattened = {}

 for (let [browser, versions] of Object.entries(browserslistStats)) {
	 for (let [version, usage] of Object.entries(versions)) {
		const usageFixed = usage.toFixed(2)
		if (usageFixed > 0) {
			flattened[`${browser} ${version}`] = usageFixed
		}
	 }
 }

// sort descending by usage
 const sorted = Object.fromEntries(
    Object.entries(flattened)
		.sort()
		.sort(([,a],[,b]) => b-a)
);

for (let [browser, usage] of Object.entries(sorted)) {
	table += `| ${browser} | ${usage}% |\n`
}

console.log(table)
