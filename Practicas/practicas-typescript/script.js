"use strict";
console.log("Estoy trabajando en TypeScript");
// Tipos de datos:
/* ########## STRINGS ########## */
// Comillas dobles:
const str1 = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2 = 'Hola, soy una cadena con comillas simples';
// Template literals (backticks):
const nombre = "Juan";
const edad = 30;
const str3 = `Hola soy ${nombre} y tengo ${edad} años.`;
/* ########## NÚMERICOS ########## */
// Números enteros:
const num1 = 10;
// Números decimales:
const num2 = 10.5;
// Notación exponencial:
const num3 = 2.5e3; // 2.5 * 10^3 = 2500
// Notación exponencial negativa:
const num4 = 1.5e-2; // 1.5 * 10^-2 = 0.015
// Hexadecimales (base 16) utilizando el prefijo "0x":
const num5 = 0xA; // Valor decimal: 10
// Octales (base 8) utilizando el prefijo "0o":
const num6 = 0o12; // Valor decimal: 10
// Binarios (base 2) utilizando el prefijo "0b":
const num7 = 0b1010; // Valor decimal 10
/* ########## BOOLEANOS ########## */
// Valor booleano true:
const bool1 = true;
// Valor booleano false:
const bool2 = false;
/* ########## UNDEFINED ########## */
// Declaración de una variable con valor undefined
let varableUndefined;
// Asignación de valor undefined
varableUndefined = undefined;
// NULL
// Declaración de una variable con valor null
let variableNull;
variableNull = null;
/* ########## ARRAYS ########## */
// Arreglo de números:
const numeros = [1, 2, 3, 4, 5];
// Arreglo de cadenas de texto (string):
const nombres = ["Juan", "Maria", "Pedro"];
// Arreglo de booleanos:
const valoresBool = [true, false, true];
/* ########## FUNCIONES ########## */
// Declaración de función con tipado explícito:
function sumar(a, b) {
    return a + b;
}
// Funciones felcha con retorno implícito (inferido por TypeScript):
const dividir = (a, b) => a / b;
// Funciones con parámetros opcionales:
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
}
// Funciones con parámetros por defecto:
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
/* ########## CLASES ########## */
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre ${this.nombre}.`);
    }
}
/*****************************************/
/* EJEMPLOS EN CÓDIGO*/
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("Puedes seguir viendo este curso de TypeScript");
}
else {
    console.log("Primero tenes que ver el curso de JavaScript");
}
let interMiami = 11;
let fcDallas = 11;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2)
        console.log("Gana inter Miami");
    if (equipo1 == equipo2)
        console.log("empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas);
let arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
//# sourceMappingURL=script.js.map