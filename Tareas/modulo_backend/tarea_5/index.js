import EncontrarPares from "./find.js";
import CrearNumeros from "./generator.js";
import { unlink } from 'fs';

const OPTION = parseInt(process.argv.slice(2));

switch (OPTION) {
    case 1:
        CrearNumeros();
        break;
    case 2:
        EncontrarPares();
        break;
    case 3:
        unlink('numeros.txt', (error) => {
            console.log(error ? error : "FILE DELETED.")
        })
        break;
    default:
        console.log("DIGITE node index [numero de opcion] QUE DESEA REALIZAR:");
        console.log("1 - crear archivo de números \n2 - ver los pares \n3 - eliminar el archivo");
}