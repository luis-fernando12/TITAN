var fs = require('fs')

if(!fs.existsSync("./minha pasta")){
    console.log("não existe")
    fs.mkdirSync("minha pasta")
}  else if(fs.existsSync("./minha pasta")){
    console.log("existe")
}


var fs = require('fs')

if(!fs.existsSync("./minha pasta")){
    console.log("não existe")
    fs.mkdirSync("minha pasta")
}  else {
    console.log("existe")
}
