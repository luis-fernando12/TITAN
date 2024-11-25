var http = require('http')

var port = 3000


var server = http.createServer((req , res) => {
var urlInfo = require('url').parse(req.url, true)
    var name = urlInfo.query.name


    res.statusCode = 200;
res.setHeader('Content-type' , 'text/html');
if (!name){
res.end('<h1>Preencha seu nome: </h1><form method="GET"> <input type="text" name="name"/> <input type="submit" value="Enviar"> </form>')
}
else {
    res.end(`<h1>Bem vindo ${name}</h1>` )
}
})


server.listen(port, () => {
    console.log('Servidor rodando de boa na porta: ' + port)
})


