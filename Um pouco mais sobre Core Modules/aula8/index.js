var http = require('http')
var fs = require('fs')
var port = 3000


var server = http.createServer((req , res) => {
fs.readFile('text.html', function (err,  data){
    res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data);
        return res.end();
})
})


server.listen(port, () => {
    console.log('Servidor rodando de boa na porta: ' + port)
})


