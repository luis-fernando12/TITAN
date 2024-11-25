function enviar(corpo, para, callback) {
    setTimeout(() => {
        console.log(`Para: ${para}
        --------------------------
        ${corpo}
        --------------------------
        De victor Lima`)
        callback("OK", 9 , "5s")
    },
    
    5000)
}


console.log("Aguarde um momento seu email será enviado")
enviar("Oi seja bem vindo ao guia" , " luisfernando@gamil.com" , (status, amount, time) => {
    console.log(
        `Status : ${status}
        ------------------
        Contatos: ${amount}
        ------------------
        Tempo de envio: ${time}`
    )
    console.log("Pronto email enviado com sucesso")
})


