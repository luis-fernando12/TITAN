//-----modulo externo-----

let chalk = require('chalk')
let inquirer = require('inquirer')

//-----modulo interno-----
let fs = require('fs')


operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O você deseja fazer???' ,
            choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar' , 'Sair']
        },
    ],).then((answers) => {
        let action = answers['action']
        console.log(action)
       
       
        if (action === 'Criar conta') {
            createAccount()
        }
        else if (action === 'Consultar saldo') {
            getAccountBalance()
        }
         else if (action === 'Depositar') {
            dep()
        }
        else if (action === 'Sacar') {
            withdrawmoney()
        }
        else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obgrigado por usar nossos serviços volte sempre'))
            process.exit()
        }
    
 
})
        .catch((err) => console.log(err))
}


//-----Create Account-----
function createAccount() {
    console.log(chalk.green('Parabens por escolher nosso banco'))
    console.log(chalk.blue('Prencha as opções seguintes'))
    
    buildAccount()
}
//-----Build Account-----
function buildAccount() {
    inquirer.prompt([
        {
            name: 'Nome-da-conta',
            message: 'Digite seu nome:'
        }
    ]).then((answers) => {
    let accountName = answers['Nome-da-conta']
    
    
    console.info(accountName)


//Stage 1
    if(!fs.existsSync('contas'))  {
    fs.mkdirSync('contas')
}


//Stage 2
if(fs.existsSync(`contas/${accountName}.json`))  {
    console.log(chalk.red('Esse nome ja é usado escolha outro'))

    buildAccount()
    return
}     

//Stage 3
fs.writeFile(`contas/${accountName}.json`, '{"balance": 0}', function(err) {
    if (err) {
        console.log(err)
    }
})

console.log(chalk.green('Sua conta foi criada com sucesso'))

operation()

} )
    .catch((err)  =>  console.log(err))
}

//-----Depositing into account-----

function dep() {
    inquirer.prompt([
        {
            name: 'Nome da conta',
            message: 'Qual o nome da sua conta'
        }
    ]).then((answers) => {
        let accountName = answers['Nome da conta']

        if (!check(accountName)) {
            return dep()
        }
        inquirer.prompt([
            {
                name: 'amount',
                message: 'Qual o valor deseja depositar'
            }
        ]).then((answers) => {
            let amount = answers['amount']

            add(accountName, amount)
            operation()

        }
        )
        .catch((err) => console.log(err))

})
    
    .catch((err) => console.log(err))

}
 
//-----Existence check-----
function check(accountName) {
    if (!fs.existsSync (`contas/${accountName}.json`)) {
        console.log(chalk.red('Essa conta não existe'))
        return false
    }
    
    return true
}


function add (accountName, amount) {
    let accountDate = get(accountName)
    if (!amount) {
        console.log(chalk.red('Ocorreu um erro tente novamente mais tarde'))
        return dep()
    }


    accountDate.balance = parseFloat(amount) + parseFloat(accountDate.balance)

    fs.writeFileSync(`contas/${accountName}.json`,
        JSON.stringify(accountDate),
        function(err) {
            console.log(err)
        }
    )
        console.log(chalk.bgGreen(`Foi depositado o valor de R$${amount} na sua conta`),)
        
}

function get(accountName) {
    let accountJSON = fs.readFileSync(`contas/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

//check balance
function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome de sua conta'
        }
    ]).then((answers) => {
        let accountName = answers['accountName']
        if (!check(accountName))  {

            return getAccountBalance()    }
        
            let accountDate = get(accountName)

            console.log(chalk.bgYellow.black(`Óla, o saldo da sua conta é R$${accountDate.balance}`))
operation()

    }).catch(err => console.log(err))
}


//-----Saque----
function withdrawmoney() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da conta'
        }
    ]).then((answers) => {
        let accountName = answers['accountName']

        if (!check(accountName)) {
            return withdrawmoney
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto voce deseja sacar??'
            }
        ]).then((answers) => {
            let amount = answers['amount']

            removeAmount(accountName , amount)
           
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
    let accountDate = get(accountName)

    if (!amount) {
        console.log(chalk.red('Ocorreu um erro tente novamente'),) 
    return withdrawmoney()
    }

    if(accountDate.balance < amount) {
        console.log(chalk.gray('Valor indisponivel'),)
        return withdrawmoney()
    }

    accountDate.balance = parseFloat(accountDate.balance) - parseFloat(amount)


    fs.writeFileSync(`contas/${accountName}.json`, JSON.stringify(accountDate) , function(err){
    console.log(err)})

    console.log(chalk.bgRed.black(`Seu saque de R$${amount} foi efetuado com sucesso`))

    operation()
} 