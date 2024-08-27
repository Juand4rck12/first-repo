const numeros = [2, 5, 7, 1, 3, 4];

const nuevoArray = console.log(numeros.map((num) => num * 2))
// const nuevoArray = [];
// for (const numero of numeros) {
//     nuevoArray.push(numero * 2);
// }
// console.log(nuevoArray);

let myArray = ['U', 'N', 'I', 'V', 'E', 'R', 'S', 'O'];

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
}

console.log("");

let posicion = 0;
while (posicion < myArray.length) {
    console.log(myArray[posicion])
    posicion += 1;
}

const objeto = {
    nombre: 'Arroz',
    precio: 1600,
    inventario: 10
}

console.log(objeto.nombre);

const newObject = new Object()
newObject.nombre = 'Arroz';
newObject.precio = 1600;
newObject.inventario = 10;

console.log(newObject);

const objetosOficina = ['computadora', 'silla', 'escritorio'];

console.log(objetosOficina);

objetosOficina.push('papelera'); // Añadir elemento al final 

console.log(objetosOficina);

objetosOficina.pop() // Eliminar el elemento del final
console.log(objetosOficina);


// Find si es una sola respuesta
const findObjeto = objetosOficina.find((objetoOficina) => objetoOficina === 'silla')
console.log("\nUltimo log ==>", findObjeto);

// Filter si son varias respuestas
const filterObjeto = objetosOficina.filter((objetoOficina) => objetoOficina !== 'silla')
console.log("\nUltimo log con filter ==>", filterObjeto);

// const animal = 'perro';

// switch (animal) {
//     case 'pollo':
//         console.log('El animal es un pollo.');
//         break;
//     case 'perro':
//         console.log('El animal es un perro.');
//         break;
//     default:
//         console.log('No encontramos tu animal');
// }

// if (animal === 'pollo') {
//     console.log('El animal es un pollo')
// } else if (animal === 'perro') {
//     console.log('El animal es un perro')
// } else {
//     console.log('No encontramos tu animal')
// }

// const ternario = animal === 'pollo' ? 'El animal es un pollo.' : animal === 'perro' ? 'el animal es un perro.' : 'No encontramos tu animal.';