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

enviar("Hello world", "fernando@gmail.com").then(( {time , to}) => {
    console.log("Seu email chegou")
    console.log(`    Tempo: ${time}
    -------------------
    Para: ${to}`
    )
}).catch( () => {
    console.log("Seu email se perdeu no caminho")
})