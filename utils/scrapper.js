const request = require("request-promise");
const cheerio = require("cheerio");

const webScrap = async (link) => {
	return new Promise((resolve, reject) => {
		request(link, (error, response, html) => {
			if(!error && response.statusCode==200){
				resolve(html);
			} else {
				reject(error);
			}
		})
	})
}

const scrapper = async(link) => {
	return new Promise((resolve, reject) => {
		webScrap(link)
		.then((html) => {
			const $ = cheerio.load(html); 
			resolve($);
		}).catch((error) => {
			reject(error);
		})
	})
}

module.exports = scrapper;
