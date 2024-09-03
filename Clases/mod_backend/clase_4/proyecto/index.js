// import { createReadStream } from 'fs'
import { error } from 'console';
import { readFile, appendFile, open, writeFile, unlink } from 'fs';

// Eliminar el archivo
// unlink('file.txt', (error) => {
//     if(error){
//         console.error(error) 
//     }else{
//         console.log("file deleted")
//     }
// })

// Creacion de archivos
writeFile('file.txt', "hello word 2", (error) => {
    if(error){
        console.error(error)
    }else{
        console.log("file created")
    }
})

// Abrir archivos
// open('file.txt', "w", (error, file) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("file opened...")
//     }
// })

// Leer archivos
// readFile('file.txt', (error, data) => {
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(data.toString())
//     }
// })

// Crear archivos
// appendFile('file.txt', "\nhello word", (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log('file updated')
//     }
// })

// const dataToBuffer = Buffer.from("Hello Word, This is a Buffer");
// console.log(dataToBuffer);

// const stream = createReadStream('file.txt');
// console.log(stream)
// stream.on('readable', () => {
//     const data = stream.read(2)
//     if (data) {
//         console.log(data)
//         console.log(data.toString())
//     }
// })
// setTimeout(() => {
//     const data = stream.read(10)
//     console.log(data)
// }, 2000);

// stream.on('open', () => {
//     console.log('file opened')
// })
// stream.on('data', (chunk) => {
//     console.log(chunk)
//     console.log(chunk.toString())
// })
// stream.on('close', () => {
//     console.log('file closed')
// })