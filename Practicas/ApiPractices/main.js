// import 'dotenv/config'

console.log("Hola mundo")

const ENDPOINTS = {
    API_URL:
    "https://api.thecatapi.com/v1/images/search?",

    API_URL_LIMIT:(limit=3) => // Limite por defecto
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`,

    API_URL_KEY: (key, limit=3) =>
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${key}`
    
}

// const API_KEY = 

// Con promesas
// function fetchImage() {
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });
// }

async function loadRandomMichis() {
    const res = await fetch(ENDPOINTS.API_URL);
    const [data] = await res.json();

    console.log(data)
    const imgOne = document.getElementById('img1');
    const imgTwo = document.getElementById('img2');
    const imgThree = document.getElementById('img3');

    imgOne.src = data[0]
    imgTwo.src = data[1].url
    imgThree.src = data[2].url
}

loadRandomMichis()

// async function loadRandomMichis() {
//     const res = await fetch(API_URL);
//     const data = await res.json();

//     console.log(data)
//     const imgOne = document.getElementById('img1');
//     const imgTwo = document.getElementById('img2');
//     const imgThree = document.getElementById('img3');

//     imgOne.src = data[0].url
//     imgTwo.src = data[1].url
//     imgThree.src = data[2].url
// }
