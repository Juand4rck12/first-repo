import Chance from "chance";

const chance = new Chance();

// Generar datos aleatorios
const nombre = chance.name();
const edad = chance.age();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();
const direccion = chance.address();

// Imprimir los datos aleatorios generados
console.log("Datos aleatorios generados:");
console.log("Nombre: ", nombre);
console.log("Edad:", edad.toString());
console.log("Dirección:", direccion);
console.log("Correo electronico:", correo);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleString());
console.log("Teléfono:", telefono);