var http = require('http')
var fs = require('fs')
var url = require('url')
var port = 3000


var server = http.createServer((req , res) => {
var x = url.parse (req.url , true) 
var filename = x.pathname.substring(1)


if (filename.endsWith('html')){ 
    if(fs.existsSync(filename)){
    fs.readFile(filename, function (err,  data){
    res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data);
        return res.end();
})
}
else {
    fs.readFile('404.html', function (err,  data){
        res.writeHead(404, {'Content-Type': 'text/html'}); 
            res.write(data);
            return res.end();
    })

}
}
})


server.listen(port, () => {
    console.log('Servidor rodando de boa na porta: ' + port)
})

