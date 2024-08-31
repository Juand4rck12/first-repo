const esperarSegundos = async (time) => {
    await new Promise ((resolve, reject) => {
        resolve(setTimeout(() => {
            console.log(`El tiempo ha finalizado en ${time}ms.`)
        }, time))
        reject((error) => console.log(error))
    })
}

export default esperarSegundos;