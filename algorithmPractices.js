// Ver posibilidades de combinacion de strings
const list = ['manzana','pera','uva','sandia'];

function solution (list) {
    result = [];
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

const array1 = [1,2,3,4,5,6,7,8,9,10]
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
    const voc = ['a' ,'e' ,'i' ,'o' ,'u' ];
    let vocList = 0;
    let strMin =  str.toLowerCase();
    let ordenedStr = strMin.split("");
    ordenedStr.forEach(str => {
        if(voc.includes(str)){
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

const filtroImpar = arr => arr.filter((imp)=> imp % 2 != 0);

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
        if (arrOfReps.includes(element)){ // Si el número ya está en el arreglo de números repetidos
            if (!arrOfDuplicates.includes(element)) { // Si el número no está en el arreglo de números duplicados
                arrOfDuplicates.push(element); // Agregar el número al arreglo de números duplicados
            }
        }else{
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
        if(element < 3) {
            newWords.push(element);
        }
    })
    return strSep;
}

console.log(filterLongWords('Hola como estas alo que haces si'));

// Hacer figuritas cuadradas 
let size = 10;
for(let i = 0; i < size; i++){
    let row = '';
    for(let j = 0; j < size; j++){
        row += '°'
    }
    console.log(row)
}
// Escribe una función que tome un arreglo de números y retorne la suma de todos los números pares en el arreglo.
// Ej: sumaPares([1, 2, 3, 4, 5, 6]) // debería retornar 12

const numP = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,,17,18,19,20];

function sumarPares (arr) {
    let total = 0;
    arr.forEach(num => {
        if(num % 2 == 0){
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
        if (numeros[j] > numeros[j+1]) {
            let aux = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = aux;   
        }
    };
}

console.log(numeros)


// Funciones: 
function mostrarMensaje (nombre,edad) {
    if(edad != 18){
      console.log(`${nombre} es menor de edad. Tiene ${edad} años.`)
    }else{
      console.log(`${nombre} es mayor de edad. Tiene ${edad} años.`)
    }
  }
  
  mostrarMensaje("Juan",17)
  
  const verificarEdad = (nombre,edad) => {
    return edad !== 18 ? `${nombre} Es menor de edad` : `${nombre} Es mayor de edad`;
  }
  
  console.log(verificarEdad("Martin",19))

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

const saludo1 = () =>  console.log('Hola! Soy Juan Diego');
const saludo2 = () =>  console.log('Hola! Soy Juan Andres');
const saludo3 = () =>  console.log('Hola! Soy Juan Martin');
const saludo4 = (name) => console.log(`HOLA! ${name}`);

const mostrarSaludo = (callback) => {
    callback();
}

mostrarSaludo(saludo1);
mostrarSaludo(saludo2);
mostrarSaludo(saludo3);
mostrarSaludo(() => saludo4('Juan'));

// Mas practica callbacks

const names = ['juan', 'pedro', 'martin','leopoldo','arnulfo']

const modifyArray = ((array, callback) => {
    array.push('andres')
    callback()
})

modifyArray(names, function(){
    console.log(names)
})