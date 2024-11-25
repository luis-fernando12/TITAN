// console.log (process.argv)

var args = process.argv.slice(2)
// console.log(args)


var nome = args[0].split('=')[1]


console.log(nome)

var idade = args[1].split('=')[1]
console.log(idade)