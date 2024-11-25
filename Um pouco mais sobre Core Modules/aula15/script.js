var path = require('path')


console.log(path.resolve('teste.txt'))


var midFolder = 'relatorios'
var fileName = 'arquivo.txt'
var finalPath = path.join("/" , "arquivos" , fileName , midFolder)

console.log(finalPath)