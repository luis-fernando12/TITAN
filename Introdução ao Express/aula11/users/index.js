var express = require('express')
var router = express.Router()
var path = require('path')

var basePath = path.join(__dirname, '../templates')

router.get('/add/' , (req, res) => {
    res.sendFile(`${basePath}/usersform.html`)
})

router.post('/save' , (req, res) => {
         console.log(req.body)
         var name = req.body.name
         var age = req.body.age

         console.log(`O nome do usuario é ${name} e ele tem ${age} anos `)

         res.sendFile(`${basePath}/usersform.html`)

})

router.get("/:id" , (req,  res)=> {
var id = req.params.id
console.log(`Estamos buscando pelo usuario:  ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

module.exports = router