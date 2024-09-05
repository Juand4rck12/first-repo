import 'dotenv/config';
console.log(process.env.VARIABLE);

// .argv retorna un array con los parametros recibidos en consola.
const argumentos = process.argv.slice(2); // Elimina los 2 primeros archivos del Array que retorna .argv
const [pokemon] = argumentos;
// const [numero1, operador, numero2] = argumentos;
// console.log(numero1, operador, numero2);

// const num1 = parseInt(process.argv[2]);
// const num2 = parseInt(process.argv[3]);

// const sum = (n1, n2) => {
//     return n1 + n2;
// }

// console.log(sum(num1,num2));

const baseUrl = process.env.BASE_API_URL;

const fetchPokemon = async () => {
    const nombrePokemon = pokemon || ''; 
    const response = await fetch(`${baseUrl}${nombrePokemon}`);
    const data = await response.json();
    console.log("data ==>", data);
}

fetchPokemon()