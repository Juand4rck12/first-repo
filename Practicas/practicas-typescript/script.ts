console.log("Estoy trabajando en TypeScript")

// Tipos de datos:

/* ########## STRINGS ########## */
// Comillas dobles:
const str1: string = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2: string = 'Hola, soy una cadena con comillas simples';
// Template literals (backticks):
const nombre: string = "Juan";
const edad: number = 30;
const str3: string = `Hola soy ${nombre} y tengo ${edad} años.`;


/* ########## NÚMERICOS ########## */
// Números enteros:
const num1: number = 10;

// Números decimales:
const num2: number = 10.5;

// Notación exponencial:
const num3: number = 2.5e3; // 2.5 * 10^3 = 2500

// Notación exponencial negativa:
const num4: number = 1.5e-2; // 1.5 * 10^-2 = 0.015

// Hexadecimales (base 16) utilizando el prefijo "0x":
const num5: number = 0xA; // Valor decimal: 10

// Octales (base 8) utilizando el prefijo "0o":
const num6: number = 0o12; // Valor decimal: 10

// Binarios (base 2) utilizando el prefijo "0b":
const num7: number = 0b1010; // Valor decimal 10

/* ########## BOOLEANOS ########## */
// Valor booleano true:
const bool1: boolean = true;

// Valor booleano false:
const bool2: boolean = false;


/* ########## UNDEFINED ########## */
// Declaración de una variable con valor undefined
let varableUndefined: undefined;

// Asignación de valor undefined
varableUndefined = undefined;

// NULL
// Declaración de una variable con valor null
let variableNull: null;
variableNull = null;


/* ########## ARRAYS ########## */
// Arreglo de números:
const numeros: number[] = [1, 2, 3, 4, 5];

// Arreglo de cadenas de texto (string):
const nombres: string[] = ["Juan", "Maria", "Pedro"];

// Arreglo de booleanos:
const valoresBool: boolean[] = [true, false, true];


/* ########## FUNCIONES ########## */

// Declaración de función con tipado explícito:
function sumar(a: number, b: number): number {
    return a + b;
}

// Funciones felcha con retorno implícito (inferido por TypeScript):
const dividir = (a: number, b: number) => a / b;

// Funciones con parámetros opcionales:
function saludar (nombre: string, edad?: number): string {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    } else {
        return `Hola, mi nombre es ${nombre}`;
    }
}

// Funciones con parámetros por defecto:
function saludar2(nombre: string, edad: number = 30): string {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}


/* ########## CLASES ########## */
class Persona {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    saludar() {
        console.log(`Hola, mi nombre ${this.nombre}.`);
    }
}


/* ########## INTERFACES ########## */
// Interfaz básica
interface Persona {
    nombre: string;
    edad: number;
}

// Interfaz con propiedades opcionales
interface Product {
    nombre: string;
    precio: number;
    description?: string;
}

// Interfaz para funciones
interface Comparador {
    (a: number, b: number): boolean;
}

// Interfaz para clases (class interfaces)
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}