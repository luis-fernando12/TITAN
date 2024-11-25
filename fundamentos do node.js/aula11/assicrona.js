var fs = require('fs')

console.log('inicio')

fs.writeFile ('arquivo.txt', 'isso é node', function(err){
setTimeout(function()
{
    console.log('Arquivo criado com sucesso')
}, 1000)

})

console.log('fim')