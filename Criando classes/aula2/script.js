class Filmes {
    constructor(titulo , diretor , genero , ano , autor , duração) {
        this.titulo = titulo
        this.diretor = diretor
        this.ano = ano
        this.genero = genero
        this.autor = autor
        this.duração = duração
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
fixa() {
    console.log("Titulo: " + this.titulo)
    console.log("Titulo: " + this.diretor)
    console.log("Titulo: " + this.genero)
    console.log("Titulo: " + this.ano)
}
}


let vingadores = new Filmes("vingadores" , "alguem" , "ação" , 2012);

vingadores.fixa()

