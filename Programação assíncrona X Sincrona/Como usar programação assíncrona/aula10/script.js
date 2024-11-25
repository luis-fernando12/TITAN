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
             let deuErro = true;
 
             if(!deuErro) {
                 resolve({time: 3 , to: "fernando@gmail.com"})
             }
             else {
                 reject("Fila cheia")
             }
         },3000) 
     })
 }
 

// async function principal() {
//     let id = await pegarID();
//     let email = await buscarEmail(id);
//     enviar().then(() => {
//         console.log("Seu email foi enviado com sucesso para o usuario de id: " + id)
//     }).catch((err) => {
//         console.log(err)
//     })
  
// }

principal()



async function principal() {
    let id = await pegarID();
    let email = await buscarEmail(id);
    try {await enviar()
    console.log("Seu email foi enviado com sucesso para o usuario de id: " + id)
    }catch(err) {console.log(err)}
}

principal()