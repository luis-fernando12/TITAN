var http = require('http')

var port = 3000


var server = http.createServer((req , res) => {
res.statusCode = 200;
res.setHeader('Content-type' , 'text/html');


res.end('<h1>Ola Http</h1> <br> <ul><b>Meu primeiro Html</b><li>css</li> <li>javascript</li> <li>C++</li></ul>')

})


server.listen(port, () => {
    console.log('Servidor rodando de boa na porta: ' + port)
})


