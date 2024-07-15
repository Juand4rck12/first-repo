// Reto
// Hacer un programa usando promesas en donde una madre pueda verificar si su hijo se porta bien o mal.
// Si se porta bien le regala un telefono celular, si no se porta bien, le cancela el regalo y lo castiga.

// function verificarComportamiento(comportamiento) {
//     return new Promise((resolve, reject) => {
//         if(comportamiento) {
//             resolve('Te portaste bien');
//         } else {
//             reject ('Te portaste mal');
//         }
//     })
// }

// verificarComportamiento(true)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const prom = Notification.requestPermission();
prom.then(function(param){
    if(param === "granted"){
        console.log("Has dicho que si")
    }else{
        console.log("Has dicho que no")
    }
})