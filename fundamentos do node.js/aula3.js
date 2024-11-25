var minimist = require('minimist')


var args = minimist(process.argv.slice(2))

console.log(args)


var nome = args['nome']
var idade = args ['idade']

console.log(nome, idade)

console.log ('O nome dele é ' + nome +' e ele tem '+ idade + ' anos')