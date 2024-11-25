class Filmes {
    constructor() {
        this.titulo = ""
        this.diretor = ""
        this.ano = 0
        this.genero = ""
        this.autor = ""
        this.duração = ""
    }


Reproduzir() {
    console.log("Reproduzir...")
}
Pausar() {
    console.log("Pausar ||")
}
Avançar() {
    console.log("Avançar >>")
}
Fechar() {
    console.log("Fechar X")
}
}


let vingadores = new Filmes();

vingadores.titulo = "vingadores"
vingadores.genero = "ação"
vingadores.ano = 2012
console.log(vingadores.ano)
console.log(vingadores.titulo)
console.log(vingadores.genero)