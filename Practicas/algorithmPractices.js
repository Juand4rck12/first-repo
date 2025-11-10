import fs from 'fs';

// Ver posibilidades de combinacion de strings
const list = ['manzana', 'pera', 'uva', 'sandia'];

function solution(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            result.push(list[i], list[j]);
        }
    }
    console.log(result);
}

solution(list)

// Practicas 

// 1. Crea una función que reciba un string como parametro y devuelva la cadena invertida

const revString = str => str.split("").reverse().join("")

console.log(revString("satse omoc aloh"));

// 2. Funcion que determine si una cadena es palindroma (se lee igual de derecha a izquierda)

const esPalin = (str => {
    let lowRegStr = str.toLowerCase();
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
})

console.log(esPalin('eye'))

// 3. Sumar todos los elementos de un arreglo

const sumArr = (arr => {
    let totalArr = 0;
    arr.forEach(element => {
        totalArr += element;
    });
    return totalArr
})

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumArr(array1));

// 4. Crea una funcion para encontrar el numero mayor en un arreglo

const maxNum = (arr => {
    let max = arr[0];
    arr.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return `El número mayor es: ${max}`;
})

console.log(maxNum(array1));

// 5. Crea una funcion para encontrar cuantas vocales hay en uno o varios strings

const contVocales = (str => {
    const voc = ['a', 'e', 'i', 'o', 'u'];
    let vocList = 0;
    let strMin = str.toLowerCase();
    let ordenedStr = strMin.split("");
    ordenedStr.forEach(str => {
        if (voc.includes(str)) {
            vocList++
        }
    });
    return `"${str}" tiene ${vocList} vocales.`;
})

console.log(contVocales("hola como estas"));

// 6. Funcion para filtrar numeros pares de un array

const filtroPar = arr => arr.filter((par) => par % 2 === 0);

console.log(filtroPar(array1));

// 7. Funcion para filtrar números impares de un array

const filtroImpar = arr => arr.filter((imp) => imp % 2 != 0);

console.log(filtroImpar(array1));

// 8. Crea una función llamada fizzBuzz que tome un número n y devuelva un arreglo con los números del 1 al n, pero reemplaza los múltiplos de 3 con "Fizz", los múltiplos de 5 con "Buzz", y los múltiplos de ambos con "FizzBuzz".

function fizzBuzz(n) {
    let nArr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            nArr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            nArr.push('Fizz');
        } else if (i % 5 === 0) {
            nArr.push('Buzz');
        } else {
            nArr.push(i);
        }
    }
    return nArr;
}

// Ejemplo:
console.log(fizzBuzz(15));

// 9. función que reciba un arreglo de números y devuelva un nuevo arreglo con todos los números que se repiten en el arreglo original.

const valRep = (arr => {
    let arrOfReps = []; // Arreglo para almacenar los números que se repiten
    let arrOfDuplicates = []; // Arreglo para almacenar los números duplicados sin repetirlos
    arr.forEach(element => {
        if (arrOfReps.includes(element)) { // Si el número ya está en el arreglo de números repetidos
            if (!arrOfDuplicates.includes(element)) { // Si el número no está en el arreglo de números duplicados
                arrOfDuplicates.push(element); // Agregar el número al arreglo de números duplicados
            }
        } else {
            arrOfReps.push(element); // Agregar el número al arreglo de números repetidos
        }
    })
    return arrOfDuplicates; // Devolver el arreglo de números duplicados
})

const repNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10]

console.log(valRep(repNumbers));

// 10. Filtrar palabras que contengan menos de 3 letras.

const filterLongWords = (str) => {
    const strSep = str.split(' ')
    let newWords = [];
    strSep.forEach(element => {
        if (element < 3) {
            newWords.push(element);
        }
    })
    return strSep;
}

console.log(filterLongWords('Hola como estas alo que haces si'));

// Hacer figuritas cuadradas 
let size = 10;
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '°'
    }
    console.log(row)
}
// Escribe una función que tome un arreglo de números y retorne la suma de todos los números pares en el arreglo.
// Ej: sumaPares([1, 2, 3, 4, 5, 6]) // debería retornar 12

const numP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, , 17, 18, 19, 20];

function sumarPares(arr) {
    let total = 0;
    arr.forEach(num => {
        if (num % 2 == 0) {
            total += num
        }
    })
    return `Suma total de todos los números pares del array: ${total}`;
}

console.log(sumarPares(numP))


// Escribe una función que ordene un arreglo de números en orden ascendente sin usar el método sort.
// ordenarArreglo([5, 3, 8, 1, 2]) // debería retornar [1, 2, 3, 5, 8]

const numeros = [9, 2, 14, 7, 12, 5, 1, 11, 8, 15, 4, 6, 13, 3, 10];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }
    };
}

console.log(numeros)


// Funciones: 
function mostrarMensaje(nombre, edad) {
    if (edad != 18) {
        console.log(`${nombre} es menor de edad. Tiene ${edad} años.`)
    } else {
        console.log(`${nombre} es mayor de edad. Tiene ${edad} años.`)
    }
}

mostrarMensaje("Juan", 17)

const verificarEdad = (nombre, edad) => {
    return edad !== 18 ? `${nombre} Es menor de edad` : `${nombre} Es mayor de edad`;
}

console.log(verificarEdad("Martin", 19))

// Codigo sincrono

// for(i = 0; i < 100; i++) {
//     console.log(i)
// }

// console.log('tarea 1...')
// console.log('tarea 2...')

// Codigo asincrono 
// setTimeout(() => {
//     console.log("Codigo asincrono 1...")
// }, 5000);

// setInterval(() => {
//     console.log("Codigo asincrono 2...")
// }, 2000);

// Callbacks

const saludo1 = () => console.log('Hola! Soy Juan Diego');
const saludo2 = () => console.log('Hola! Soy Juan Andres');
const saludo3 = () => console.log('Hola! Soy Juan Martin');
const saludo4 = (name) => console.log(`HOLA! ${name}`);

const mostrarSaludo = (callback) => {
    callback();
}

mostrarSaludo(saludo1);
mostrarSaludo(saludo2);
mostrarSaludo(saludo3);
mostrarSaludo(() => saludo4('Juan'));

// Mas practica callbacks

const names = ['juan', 'pedro', 'martin', 'leopoldo', 'arnulfo']

const modifyArray = ((array, callback) => {
    array.push('andres')
    callback()
})

modifyArray(names, function () {
    console.log(names)
})

// Tablas de multiplicar del 1 al 10 
for (let i = 2; i <= 10; i++) {
    console.log(`--Tabla del ${i}--`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} == ${j * i}`)
    }
    console.log("")
}

// Funcion generadora de contraseñas

function genPassword(longitud) {

    const digits = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "$", "%", "&", "*"];

    let digitsDisorded = digits.sort(() => Math.random() - 0.5);
    let password = [];

    for (let i = 0; i < longitud; i++) {
        password.push(digits[Math.floor(Math.random() * digitsDisorded.length)]);
    }

    return `Contraseña: ${password.join('').toString()}`;
}

console.log(genPassword(10));

// Calcular el factorial de un número:
function calFactorial(valor) {
    let result = 1;
    for (let i = 1; i <= valor; i++) {
        result *= i;
    }
    return `${valor}!: ${result}`;
}

console.log(calFactorial(5));

// capturar valores en consola
// console.log("Escribe tu nombre:");
// const stdin = process.openStdin();

// stdin.addListener("data", (data) => {
//     console.log("Tu nombre es: " + data.toString());
//     process.exit();
// })

function crearContador(inicial) {
    let contador = inicial; // La variable 'contador' está en el "contexto" de la función externa

    // La función interna es un closure que tiene acceso a 'contador'
    return function () {
        return contador++; // Retorna el valor actual y luego lo incrementa
    };
}

const contador = crearContador(5);
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());

// 1. Concatena dos cadenas de texto

let textOne = "Hola";
let textTwo = "mundo";
let combinedText = textOne + textTwo;

console.log(combinedText)

// 2. Muestra la longitud de una cadena de texto

console.log(combinedText.length)

// 3. Muestra el primer y último carácter de un string

console.log(`1: ${combinedText[0]} 2: ${combinedText[(combinedText.length) - 1]}`)

// 4. Convierte a mayúsculas y minúsculas un string

let upperText = textOne.toUpperCase();
let lowerText = textOne.toLowerCase();

console.log(upperText, lowerText)

// 5. Crea una cadena de texto en varias líneas

let textMultiline = `Holaaa como
estas ;)`;

console.log(textMultiline)

// 6. Interpola el valor de una variable en un string

let myName = "Juan Diego";
let age = 18;
let gretting = "Hola! " + myName + " tienes " + age + " años!";

console.log(gretting)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let textWithSpace = "Holaaa como estas el dia de hoy?";

let textWithoutSpace = textWithSpace.replaceAll(" ", "_");
console.log(textWithoutSpace);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

textWithSpace.includes("como") ? console.log("Tiene la palabra 'como'") 
                               : console.log("No tiene 'como'")

// 9. Comprueba si dos strings son iguales

console.log(textOne == textTwo);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(textOne.length == textTwo.length);

// Buffers
let buffer = Buffer.alloc(1); // Que guarde un espacio
console.log(buffer) // <Buffer 00> 00 Es un espacio dentro del Buffer

buffer = Buffer.alloc(4) // Guarda 4 espacios
console.log(buffer) // <Buffer 00 00 00 00> Guarda 4 espacios en el Buffer

buffer = Buffer.from([1, 2, 3, 4, 5]) // En cada espacio asignamos un valor
console.log(buffer) // <Buffer 01 02 03 04 05>

console.log(Buffer.alloc(15)) // Buffer de 15 posiciones

// Stream: Podria definirse como una cinta transportadora que comunica dos puntos para 
// intercambiar datos. Los datos mencionados se descomponen en chunks (porciones).

// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');
// // Chunk -> trocito 

// readableStream.on('data', function (chunk) {
//     console.log(chunk)
// })

/* SCRIPT PARA RESPUESTA AUTOMATICA EN TEST DE ADDA */

// Pegar esto en la consola y ejecutar: responder(45) para responder hasta la pregunta 45
async function responder(hasta) {
    const delay = 1000;
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    
    for (let i = parseInt(document.getElementById("indexQuestion").value); i < hasta; i++) {
        // Obtener todas las opciones disponibles para la pregunta actual
        const radios = document.querySelectorAll(`.respuesta_pregunta_${i}`);
        
        if (radios.length === 0) {
            console.warn(`No se encontraron opciones para la pregunta ${i + 1}`);
            continue;
        }
        
        // Seleccionar un radio aleatorio de los disponibles
        const randomIndex = Math.floor(Math.random() * radios.length);
        const radioSeleccionado = radios[randomIndex];
        
        // Hacer click en el radio seleccionado
        radioSeleccionado.click();
        
        // Extraer la letra de la respuesta del value (última letra después del último '_')
        const respuestaLetra = radioSeleccionado.value.split('_').pop().toUpperCase();
        
        // Actualizar el campo de respuesta
        document.getElementsByClassName("answer")[i].value = respuestaLetra;
        document.getElementById('testButton').disabled = false;
        
        console.log(`Pregunta ${i + 1}: ${respuestaLetra} (${radios.length} opciones disponibles)`);
        
        if (i < hasta - 1) {
            document.getElementById('testButton').click();
            await sleep(delay);
        }
    }
    console.log('Listo!');
}

