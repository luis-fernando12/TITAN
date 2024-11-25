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
    
    console.log(name)
    console.log(price)

    res.json({menssage: `O ${name} precisa de uma ${price}`})
})


app.get('/', (req, res) => {
          res.json({message: 'Minha primeira rota'})      
})

app.listen(3000)