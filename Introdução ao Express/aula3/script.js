var express = require('express')
var app = express()
var port = 3000


app.get("/" , (res,req)=> {
    get.end("Ola mundo")
})

app.listen(port,() => {
    console.log("Pagina criada com sucesso" + port)
}   )

