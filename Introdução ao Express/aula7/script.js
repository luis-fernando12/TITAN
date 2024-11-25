var express = require('express')
var app = express()
var port = 3000
var path = require('path')

var basePath = path.join(__dirname, 'templates')
app.get("/users/:id" , (req,  res)=> {
var id = req.params.id

console.log(`Estamos buscando pelo usuario:  ${id}`)

    res.sendFile(`${basePath}/users.html`)
})


app.get("/" , (req,  res)=> {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,() => {
    console.log("Pagina criada com sucesso na porta " + port)
}   )
