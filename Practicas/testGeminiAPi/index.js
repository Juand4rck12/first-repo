import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cual es tu nombre?: ', (name) => {
    console.log(`Hola ${name}`);
    rl.question('Cual es tu edad?: ', (age) => {
        console.log(`Saludos! ${name}, a tus ${age} eres muy joven!`)
        rl.close();
    });
});

const ENDPOINTS = {
    CHUCK_NORRIS: "https://api.chucknorris.io/jokes/random",
    JOKE_API: "https://v2.jokeapi.dev/joke/Any?lang=es",
}

async function getRandomFact() {
    const response = await fetch(ENDPOINTS.JOKE_API);
    const data = await response.json();
    return data;
}

// const data = await getRandomFact();
// if (data.type == "single") {
//     console.log(data.joke);
// } else {
//     console.log(`${data.setup} ${data.delivery}`);
// }
