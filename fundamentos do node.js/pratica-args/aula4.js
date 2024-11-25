
//externo
var minimist = require('minimist')


//interno
var args = minimist(process.argv.slice(2))
var soma = require('./soma').soma


var a =parseInt (args ['a'])
var b = parseInt (args ['b'])

soma (a,b)