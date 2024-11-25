var express = require('express')
var app = express()
var port = 3000
var path = require('path')
var users = require('./users')
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use(express.static('public'))

var basePath = path.join(__dirname, 'templates')

app.use('/users' , users)



app.get("/" , (req,  res)=> {
    res.sendFile(`${basePath}/index.html`)
})

app.use( function(req , res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})


app.listen(port,() => {
    console.log("Pagina criada com sucesso na porta " + port)
}   )

