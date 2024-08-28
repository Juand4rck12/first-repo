// Punto 1: Acceso y Modificación Básica de Datos: Dado el siguiente array de libros
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

/* 
- Imprime en la consola el nombre y el autor del segundo libro.
- Actualiza el número de páginas del primer libro a 350.
- Imprime en la consola la información completa del primer libro después de la actualización.
- Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor */
console.log("---Punto 1---")
console.log(libros[1].titulo + " - " + libros[1].autor);

libros[0].paginas = 350;
console.log(libros[0])

libros.map((libro) => console.log({ titulo: libro.titulo, autor: libro.autor }))
console.log("------------")

// Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudiantes y utilizando un bucle for:
console.log("\n---Punto 2---")
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

/* 
- Calcula la suma de las edades de todos los estudiantes en el array
- Calcula el promedio de edad de los estudiantes.
- Imprime en la consola tanto la suma como el promedio de edad de los estudiantes. */

let edadEst = 0;
estudiantes.forEach((estudiante) => edadEst += estudiante.edad);

console.log(`Edad de todos los estudiantes: ${edadEst} \nPromedio de edades: ${edadEst / 6}`);
/* 
- RETO (Opcional): Si quieres retarte te invitamos a crear un programa que sea capaz de recorrer
el array estudiantes de el punto 2 y encontrar a el/la estudiante con el mayor promedio, utilizando
un bucle for o cualquer otro método visto en clase
*/

let promMayor = estudiantes[0].promedio;
let namePromMayor = estudiantes[0].nombre;

estudiantes.forEach(element => {
    if (element.promedio > promMayor) {
        promMayor = element.promedio
        namePromMayor = element.nombre
    }
});

console.log(`El mayor promedio es de ${namePromMayor} con un promedio de ${promMayor}`)

console.log("------------")

// Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:
console.log("\n---Punto 3---")
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

/* }
- Utilizando filter debes filtrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
- Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores. 
*/

const ropaProds = productos.filter((producto) => producto.categoria === 'Ropa');
const preciosMayores = productos.filter((producto) => producto.precio > 30);
console.log(ropaProds);
console.log(preciosMayores);