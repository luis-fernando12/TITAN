var http = require('http')
var fs = require('fs')
var port = 3000


var server = http.createServer((req , res) => {
var urlInfo = require('url').parse (req.url , true) 
var name = urlInfo.query.name

if (!name){

fs.readFile('index.html', function (err,  data){
    res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data);
        return res.end();
})}
else {
    fs.writeFile('arquivo.txt', name , function(err, datta){
        res.writeHead(302, {
            Location: '/'
        })
        return res.end
    })
}
})


server.listen(port, () => {
    console.log('Servidor rodando de boa na porta: ' + port)
})


