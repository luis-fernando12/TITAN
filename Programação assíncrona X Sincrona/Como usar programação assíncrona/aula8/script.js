function users() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{name: "luis" , lang: "java"},
                {name: "lucas", lang: "C++"},
                {name: "breno" , lang: "C#"}
            ])
        },3000
    )
    }
)
}

// users().then((usuarios) => {
//     console.log(usuarios)
// })

async function principal() {
    let usuario = await users();
    console.log(usuario)
}

users()