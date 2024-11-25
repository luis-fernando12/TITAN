const { error } = require('console')
var fs = require('fs')
fs.writeFile('teste.txt' ,  'Ola Mundo' , function(error){
    if (error) throw error;
console.log('Arquivo Criado com sucesso!!')

})  
