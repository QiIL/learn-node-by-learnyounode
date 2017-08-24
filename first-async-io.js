const fs = require('fs')
const path = process.argv[2]

fs.readFile(path, 'utf-8', function(err, data) {
	let len = data.split('\n').length - 1
	console.log(len)
})

// fs.readFile('program.js', 'utf8', function(err, data) {
// 	let len = data.split('\n').length - 1
// 	console.log(len)
// })