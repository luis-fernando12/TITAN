function pegarID() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }

        ),1500})}


function buscarEmail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fernando@gmail.com")
        }

        ),2000
    }

    )
}



function enviar (corpo, para) {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
             let deuErro = false;
 
             if(!deuErro) {
                 resolve({time: 3 , to: "fernando@gmail.com"})
             }
             else {
                 reject()
             }
         },3000) 
     })
 }
 
pegarID().then((id) => {
    buscarEmail(id).then((email) => {
        enviar().then(() => {
            console.log("Seu email foi enviado com sucesso para o usuario de id: " + id)
        }).catch((err) => {console.log("O envio falhou")})
    })
})