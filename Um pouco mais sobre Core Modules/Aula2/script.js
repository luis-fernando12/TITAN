var http = require('http')

var port = 3000


var server = http.createServer((req , res) => {
res.write('Oi mundo web')
res.end('fim')

})


server.listen(port, () => {
    console.log('Servidor rodando de boa na porta: ' + port)
})