const fs = require('fs')
const path = require('path')
const fpath = process.argv[2]
const expand = process.argv[3]
const basepath = '/home/qill/test/learnyounode'
// console.log("type of fpath:",typeof(fpath))
fs.readdir(fpath, 'utf8', function (err, files) {
	files.forEach(function(file) {
		if (path.extname(fpath+file) == '.'+expand) {
			console.log(file)
		}
	})
})