const http = require('http')
const bl = require('bl')

const url = process.argv[2]

http.get(url, (req) => {
	var result = "";
	req.setEncoding('utf8');
	req.on("data", function (data) {
		result += data;	
	})
	req.on("end", () => {
		console.log(result.length)
		console.log(result)
	})
})