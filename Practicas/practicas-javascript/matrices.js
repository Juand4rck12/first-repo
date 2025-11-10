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

// console.log(arr[arr.length - 1]) // acceder al ultimo elemento


/* ===================================================================== */
console.log("")

const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    const totalLength = arr.length;
    let positives = 0, negatives = 0, ceros = 0;
    for (let i = 0; i < totalLength; i++) {
        if (arr[i] > 0) positives++;
        if (arr[i] < 0) negatives++;
        if (arr[i] == 0) ceros++;
    }

    console.log((positives / totalLength).toFixed(6));
    console.log((negatives / totalLength).toFixed(6));
    console.log((ceros / totalLength).toFixed(6));
}

plusMinus(arr);

/* ================== LLAMADAS A API CON FETCH | ASYNC - AWAIT ================== */
async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log("Data original: ", data)
    console.log(`${data.setup} ${data.punchline}`)
}

const JOKES_API = "https://official-joke-api.appspot.com/random_joke";

await getData(JOKES_API);

console.log("\nFetch con promesas:")
fetch(JOKES_API)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));