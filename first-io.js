const fs = require('fs');
const path = process.argv[2];
let data = fs.readFileSync(path)
// let data = fs.readFileSync('program.js')
// console.log(data)
let da = data.toString();
// console.log(da)
let len = da.split('\n');
// console.log(len)
console.log(len.length-1);