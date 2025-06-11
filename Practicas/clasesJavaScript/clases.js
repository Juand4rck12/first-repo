class Vivienda {
    constructor (paredes, ventana) {
        this.paredes = paredes;
        this.ventana = ventana;
    }
}

let casa = new Vivienda(2, 4);
console.log(casa.paredes)