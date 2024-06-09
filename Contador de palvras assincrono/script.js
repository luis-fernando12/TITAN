
//----------Codigo Sincrono----------

// var fs = require('fs');


// let ler = fs.readFileSync('./arquivo.txt', 'utf8')
// // console.log(ler)

// let caracter = ler.replace(/[.,!?;:()]/g, '').split(/\s+/);

// let palavras = caracter.filter(palavra => palavra.length > 0);


// let contagem = palavras.length

// console.log("Numero de palavras é: " + contagem)

//-----------Codigo Assincrono----------

var fs = require('fs');


function contarPalavras() {
  fs.readFile('./arquivo.txt',  'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }

    // Remove
    let caracter = data.replace(/[.,!?;:()]/g, '').split(/\s+/);

    // Filter 
    let palavras = caracter.filter(palavra => palavra.length > 0);

    // Contar 
    let contagem = palavras.length;

   
    console.log(`Numero de palavras : ${contagem}`);
  });
}


contarPalavras('./arquivo.txt');
