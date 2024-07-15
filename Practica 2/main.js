// let numbers1 = [21, 33, 40, 50, 61, 70, 80, 90, 100];
// let numbers1Raiz = []

// for(i = 0; i < numbers1.length; i++) {
//     numbers1Raiz.push(Math.sqrt(numbers1[i]));
// }

// console.log(numbers1Raiz);

// const numbers1Raiz2 = numbers1.map(element => Math.sqrt(element))
// console.log(numbers1Raiz2);

// const estudiantes = [
//     {
//         nombre: 'Juan',
//         apellido: 'Perez',
//         edad: 17
//     },
//     {
//         nombre: 'Catalina',
//         apellido: 'jimenez',
//         edad: 25
//     },
//     {
//         nombre: 'Federico',
//         apellido: 'Martinez',
//         edad: 26
//     },
// ];

// const mayoresEdad = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         callback(element);
//     }
// }

// const callback = (estudiante) => {
//     if(estudiante.edad > 18) {
//         console.log(estudiante)
//     }
// }

// mayoresEdad(estudiantes,callback);

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// const numeros2 = [2,4,6,8,10,12,14,16,18,20];

// // double = numbers.map(number => number * 2);
// // console.log(double);


// const double = (array) => {
//     let numbersDouble = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         numbersDouble.push(element*2);
//     }
//     console.log(numbersDouble);
// }

// double(numeros);
// double(numeros2);

const downVideo = (callback) => {
    setTimeout(() => {
        console.log("Descargando video...")
    callback()
    }, 2000);
}
const procesarVideo = (callback) => {
    setTimeout(() => {
        console.log("procesando video...")
    callback()
    }, 7000);
}

const videoDescargado = () => console.log("Video descargado :)")

downVideo(() => procesarVideo(videoDescargado));