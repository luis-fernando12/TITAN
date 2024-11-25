function enviar(corpo, para) {
    setTimeout(() => {
        console.log(`Para: ${para}
        --------------------------
        ${corpo}
        --------------------------
        De victor Lima`)
    },

    5000)
}


console.log("Aguarde um momento seu email será enviado")
enviar("Oi seja bem vindo ao guia" , " luisfernando@gamil.com")
console.log("Estamos quase lá")
console.log("Pronto email enviado com sucesso")

