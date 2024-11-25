var readline = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout,
    
})


readline.question('Qual a sua ciencia preferida?', (ciencia) => {
    if (ciencia === 'quimica') {
        console.log( 'Isso não é ciencia')
    } else {console.log('minha ciencia preferida é: ' + ciencia)}
    readline.close()
})
