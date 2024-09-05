import { readFile } from 'fs';

const EncontrarPares = () => {
    readFile('numeros.txt', (error, data) => {
        if (error) {
            console.error(error)
        } else {
            const STRING_NUMS = data.toString();
            const numsIntArr = STRING_NUMS.split(',').map(num => parseInt(num));
            const pairNums = numsIntArr.filter(num => num % 2 === 0);

            console.log(pairNums);
        }
    })
}

export default EncontrarPares;