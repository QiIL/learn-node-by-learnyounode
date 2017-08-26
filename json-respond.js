const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
	let data = url.parse(req.url, true);
	let json;
	if (req.method == 'GET'){
		switch(data.pathname) {
			case('/api/parsetime'): {
				let date = new Date(data.query.iso)
				json = {
					hour: date.getHours(),
					minute: date.getMinutes(),
					second: date.getSeconds()
				}
				break
			}
			case('/api/unixtime'): {
				json = {
					unixtime: new Date(data.query.iso).getTime()
				}
				break
			}
		}
		if (json) {
			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify(json))
		} else {
			res.writeHead(404)
			res.end()
		}
	}
})

server.listen(process.argv[2])