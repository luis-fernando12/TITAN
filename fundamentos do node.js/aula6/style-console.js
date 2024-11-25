let chalk = require('chalk')


let nota = 5

if (nota>7){
console.log(chalk.green('Parabens voce foi aprovado'))}
else if (nota >= 6) {
    console.log(chalk.yellow('Foi aprovado mas pode melhorar'))
}
else {
    console.log(chalk.bgRed.black('Voce perdeu de ano'))
}