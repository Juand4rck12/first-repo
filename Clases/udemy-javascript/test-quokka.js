console.log("Hola mundo");
console.log("Saludos")
console.log("Probando Quokka")

var myNumber = 15;
console.log(myNumber);

let myNumberTwo = 20;
console.log(myNumberTwo);

let $newVariable = "hello";
console.log($newVariable);

// ----- ASIGNACION DE VARIABLES -----
// iniciando con $, ej $myVariable
// iniciando con _, ej _myVariable
// iniciando con letra minuscula (recomendado), ej myVariable

// ----- TIPOS DE DATOS -----
// Number -> Almacena valores númericos. Ej: 10, -40, 3.9, 100
// String -> Almacena cadenas de caracteres. Ej: "Hola", 'Adios'
// Boolean -> Almacena un valor lógico. Ej, true o false
// Null -> Ausencia de la referencia de un objeto. Ej: null
// Undefined -> Ausencia de valor. Ej: undefined

let miEntero = 10;
console.log(miEntero);

let flotanteOne = 7.0;
console.log(flotanteOne);

let miFlotante = 7.9;
console.log(miFlotante);

console.log(typeof miEntero);

let myNull = null;
let myUndefined = undefined;

console.log(typeof myNull, typeof myUndefined);

console.log(Math.PI);
console.log(Math.LOG10E)

let a, b, c, d, e, f;

// SUMA
a = 3 + 4;
console.log(a);

// Resta
b = 6 - 2;
console.log(b);

// Multiplicación
c = a * 2;
console.log(c);

// División
d = b / 2.5;
console.log(d);

// Modulo (residuo de la división)
f = 9 % 2;
console.log(f);

// Potencia
e = 2 ** 3; // 2 * 2 * 2 = 8
console.log(e);


a = 6;
b = 2;
c = a++ * b--;
console.log(c);
console.log(a);
console.log(b);

let number = 5;

if (number >= 0 && number <= 5) {
    console.log(`${number} está dentro del rango`);
} else {
    console.log(`${number} No está dentro del rango`);
}

let rangue = number >= 0 && number <= 5;
console.log(`Valor dentro del rango: ${rangue}`);

// ----- PRECEDENCIA DE OPERADORES -----
// 1. Parentesis() y Corchetes{}
// 2. Operadores unarios, como -, ++, --, !
// 3. Aritmeticos *, / y %
// 4. Aritmeticos + y -
// 5. Relacionales <, <=, > y >=
// 6. Igualdad == Y !=
// 7. Logicos && y ||
// 8. Asignacion =, =+, -=, *=, etc
let counter = 0;
for (let i = 0; i < 10; i++) {
    console.log(counter)
    counter += 3
}