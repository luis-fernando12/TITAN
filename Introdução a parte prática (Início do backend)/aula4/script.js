var express = require('express')
var app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(
    express.json()
)

app.post('/createproduct', (req, res) => {
    var name = req.body.name
    var price = req.body.price

    if (!name) {
        res.status(422).json({menssage: "O campo nome é obrigatorio"})
        return
    }
    
    console.log(name)
    console.log(price)

    res.status(201).json({menssage: `O ${name} precisa de uma ${price}`})
})


app.get('/', (req, res) => {
          res.status(200).json({message: 'Minha primeira rota'})      
})

app.listen(3000)