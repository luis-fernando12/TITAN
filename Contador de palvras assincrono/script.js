
//----------Codigo Sincrono----------

// var fs = require('fs');


// let ler = fs.readFileSync('./arquivo.txt', 'utf8')
// // console.log(ler)

// let caracter = ler.replace(/[.,!?;:()]/g, '').split(/\s+/);

// let palavras = caracter.filter(palavra => palavra.length > 0);


// let contagem = palavras.length

// console.log("Numero de palavras é: " + contagem)

//-----------Codigo Assincrono----------

const fs = require('fs').promises


const caminhoArquivo = process.argv[2]


async function contarPalavras (caminhoArquivo) {
    try {
        const lerArquivo = await fs.readFile(caminhoArquivo, 'utf-8')

        const limparPalavras = lerArquivo.replace(/[.,!?;:()]/g, '').split(/\s+/)

        const array = limparPalavras.filter(palavras => palavras.length > 0 )

        const contagem = array.length

            console.log(contagem)
            console.log(array)

    } catch (error) {
        console.log(error)
    }
    
}



contarPalavras(caminhoArquivo)
