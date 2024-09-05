import { error } from 'console';
import { appendFile } from 'fs';

const CrearNumeros = () => {
    const createNumbers = () => {
        let content = [];

        for (let i = 1; i <= 1000; i++) {
            content.push(i);
        }

        return content.toString();
    }

    appendFile('numeros.txt', createNumbers(), (error) => {
        console.log(error ? error : "FILE CREATED.");
    })
}

export default CrearNumeros;