const net = require('net')

let server = net.createServer(function (socket) {
	socket.write(getDate())
	socket.end()
})
server.listen(process.argv[2])

function getDate () {
	let date = new Date()
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	d = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes();
	return Y+M+d+h+m+'\n'
}
