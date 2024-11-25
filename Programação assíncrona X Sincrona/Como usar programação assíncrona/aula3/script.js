function enviar(corpo, para, callback) {
    setTimeout(() => {
        
let deuErro = true;

        if (deuErro) {
        callback("O envio de email falhou")}
        else {
            callback()
        }
    },5000)}


console.log("O email será enviado em breve")
enviar("Oi seja bem vindo ao guia" , " luisfernando@gamil.com" , (erro) => {
    if(erro == undefined){
        console.log("Tudo OK")
    }
   else {
    console.log("Ocorreu um erro: " + erro)
   }
})


