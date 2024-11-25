var express = require('express')
var app = express()
var port = 3000
var path = require('path')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

var basePath = path.join(__dirname, 'templates')

app.get('/users/add/' , (req, res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

app.post('/users/save' , (req, res) => {
         console.log(req.body)
         var name = req.body.name
         var age = req.body.age

         console.log(`O nome do usuario é ${name} e ele tem ${age} anos `)

         res.sendFile(`${basePath}/usersform.html`)

})

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

