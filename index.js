const CONSTANTS = require('./constants');
console.log(CONSTANTS);

// File create
const fs = require('fs');
fs.writeFileSync('hello.txt', "Wleocme to the world of Node !!");

//OR import only required function like writeFileSync
const fs2 = require('fs').writeFileSync;
fs2('hello2.txt', "Wleocme to the world of Node !!");


var x = 10;
var y = 20;
var c = x + y;
console.log(c);
// color text
const colors = require('colors');
console.log('No Error'.yellow.bgMagenta);