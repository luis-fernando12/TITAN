var fs = require('fs')

console.log('inicio')

fs.writeFileSync ('arquivo.txt', 'isso é node')

console.log('fim')