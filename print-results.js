const fs = require("fs");
const resultsPath = "./results";
const pkg = JSON.parse(fs.readFileSync("package.json").toString());
// create reports
const packages = fs.readdirSync(resultsPath)
	.map(file => {
		return {
			name: file.replace(".json", "").replace(".js", ""),
			data: JSON.parse(fs.readFileSync(resultsPath + "/" + file).toString())
		}
	});
packages.sort((a, b) => {
	if (a.data.requests.average > b.data.requests.average) {
		return -1;
	} else if (a.data.requests.average < b.data.requests.average) {
		return 1;
	}
	return 0;
});
packages.forEach(item => {
	const name = getName(item.name);
	const version = Reflect.get(pkg.dependencies, name);
	const requests = item.data.requests.average;
	const latency = item.data.latency.average;
	const throughput = (item. data.throughput.average / 1000000).toFixed(2);
	console.log(`| ${name} | ${version} | ✓ | ${requests} | ${latency} | ${throughput} |`);
});


function getName(value) {
	if (value.indexOf("nestjs") > -1) {
		return "@" + value.replace("-", "/platform-");
	} else if (value.indexOf("typeix") > -1) {
		return "@" + value.replace("-", "/");
	}
	return value;
}
