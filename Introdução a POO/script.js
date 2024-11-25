class Dado {
    constructor(faces) {
        this.faces = faces;
    }
    Rolar() {
        console.log("Resultado do dado: " + this.NumeroAleatorio(1,this.faces));
    }

    NumeroAleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


let d6 = new Dado(6);
let d10 = new Dado(10);
let d12 = new Dado(12)


d6.Rolar()
d10.Rolar()
d12.Rolar()