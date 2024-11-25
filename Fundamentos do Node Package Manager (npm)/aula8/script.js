var x = require('lodash')
var chalk = require('chalk')

var a = [1,2,3,4,5,]
var b = [2,4,6,7,8,]

var diff = x.difference(a,b)

console.log(chalk.red.bold(diff))