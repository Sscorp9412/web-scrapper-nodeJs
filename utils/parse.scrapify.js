const fs = require("fs");
const scrapify = ($) => {
	const arrayStructure=[];
	$("tr").each((i, data) => {
		let json = {}; 
		const rows = $(data).text();
		const str = rows.split('\n');
		json.key = str[0].substring(0, 3);
		json.value = {};
		json.value.title = str[0].substring(3, str[0].length);
		json.value.move = str[1];
		json.ttl=180;
		arrayStructure.push(json);
	})
	myCache.mset(arrayStructure);
	return arrayStructure;
}

module.exports = scrapify;