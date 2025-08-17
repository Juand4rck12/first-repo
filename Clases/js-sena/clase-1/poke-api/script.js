function fillTable(data) {
    console.log(data)
    let key = 1;
    let html = "";
    for (let i = 0; i < data.length; i++) {
        let item = data.results[i];
        html += `
            <tr>
                <td>${key++}</td>
                <td>${item.name}</td>
                <td>${item.url}</td>
            </tr>
        `;
    }
    console.log(html)
    $("#tableTRM").html(html);
}

$(document).on("click", "#procesar", function () {
    console.log("Has hecho clic en procesar");

    // let limit = parse
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(data => {
            fillTable(data)
            console.log(`Resultados:`)
            console.log(data.results)
            console.log(data.results[0].name)
        });

    // $("#contenido").html(`Has hecho clic en procesar ${counter++} veces`);
})