const matriz = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

let totalOne = 0;
let totalTwo = 0;

// for (let index = 0; index < matriz.length; index++) {
//     const fila = matriz[index][index];
//     const columna = matriz[index][matriz.length - 1 - index];
//     totalOne += fila;
//     totalTwo += columna;
// }

// console.log("---------------------------------")

// for (let index = 0; index < matriz.length; index++) {
//     console.log(matriz[index])
//     console.log(matriz[index][matriz.length -1 -index])
// }

// console.log(`Total valores de izquierda a derecha: ${totalOne}`)
// console.log(`Total valores de derecha a izquierda: ${totalTwo}`)


// Dada una matriz, sumar en X y hayar la diferencia entre el resultado de cada suma:
function diagonalDifference(arr) {
    let sumOne = 0;
    let sumTwo = 0;
    for (let index = 0; index < arr.length; index++) {
        const fila = arr[index][index];
        const columna = arr[index][arr.length - 1 - index];
        sumOne += fila;
        sumTwo += columna;
    }

    console.log(sumOne)
    console.log(sumTwo)
    console.log(Math.abs(sumOne))
    console.log(Math.abs(sumTwo))
    console.log()

    return Math.abs(sumOne - sumTwo)
}

console.log(`Diferencia con el array: ${matriz}: `, diagonalDifference(matriz));

const arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];
// console.log(arr[arr.length - 1]) // acceder al ultimo elemento
