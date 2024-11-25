var express = require('express')
var app = express()
var port = 3000
var path = require('path')

var basePath = path.join(__dirname, 'templates')
var checkAuth = function(req, res, next) {
    req.authStatus = true
    if (req.authStatus){
        console.log('Usuario esta logado')
 next()   
    }
    else {
        console.log('Usuario nao esta logado, fça login para continuar ')
    next()
    }
}
app.use(checkAuth)

app.get("/" , (req,  res)=> {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,() => {
    console.log("Pagina criada com sucesso na porta " + port)
}   )
