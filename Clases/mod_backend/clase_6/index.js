import http from 'http';
import 'dotenv/config';

// Get, Post, Put, Delete 
// CRUD -> Create == Post, Read == Post, Update == Put, Delete == Delete

// req == request -> petición
// res == response -> respuesta

const PORT = process.env.PORT; // La url es localhost:3000

const LIBROS = JSON.stringify([
    { titulo: 'El señor de los anillos',autor: 'J.R.R Tolkien', año: 1954 },
    { titulo: 'Harry Potter', autor: 'J.K Rowling', año: 1997 }
])

const AUTORES = JSON.stringify([
    {nombre: 'J.R.R Tolkien', anioNacimiento: 1982},
    {nombre: 'J.K Rowling', anioNacimiento: 1965}
])

http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    switch (req.url) {
        case '/':
            res.write('Estas en el home')
            break;
        case '/libros':
            res.write(LIBROS)
            break;
        case '/autores':
            res.write(AUTORES)
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.write('Error 404: Not Found')
    }
    res.end()
}).listen(PORT);