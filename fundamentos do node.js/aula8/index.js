var inquirer = require('inquirer')

inquirer 
.createPromptModule([
    {name: 'p1',
     menssage: 'Qual foi sua primeira nota',   
    },
    {
        name: 'p2',
        menssage: 'Qual foi sua segunda nota ',
    },
]).then((answers) => {
    console.log(answers)
})
.catch((err) => console.log(err))