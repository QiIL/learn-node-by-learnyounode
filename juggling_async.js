const http = require('http')
const Promise = require('promise')
let result = []
let count = 0
let url = process.argv.slice(2)

function sendUrl(url, key) {
	var buf = ''
	result[key] = ''
	http.get(url, (req) => {
		req.setEncoding('utf8');
		req.on("data", function (data) {
			result[key] += data
		})
		req.on("end", function () {
			if (key == 2) {
				result.forEach(function (item) {
					console.log(item)
				})
			}
		})
	})
}

url.forEach(function(item, key) {
	sendUrl(item, key);
})