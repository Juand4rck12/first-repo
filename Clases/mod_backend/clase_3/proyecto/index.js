import axios from "axios";

const response = axios.get("https://api.escuelajs.co/api/v1/products");

console.log(response)
const successful = (data) => console.log("data ==> ", data.data);
response
    .then(successful)
    .catch((error) => console.log(error));

const misDatos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { nombre: "Sultano", ocupacion: "Artista" },
            { nombre: "Mendana", ocupacion: "Ingeniera" },
        ]);
    }, 1000);
});

misDatos
    .then((data) => console.log("Data ==> ", data))
    .catch((error) => console.log("Error ==> ", error))