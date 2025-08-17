// $("#procesar").click(function () {
//     console.log("Has hecho clic en procesar")
// })

function fillTable(data) {
    console.log(data)
    let key = 1;
    let html = "";
    for (let i = 0; i < data.length; i++) {
        let item = data[0];
        html += `
            <tr>
                <td>${key++}</td>
                <td>${item.vigenciadesde}</td>
                <td>${item.vigenciahasta}</td>
                <td>${item.valor}</td>
            </tr>
        `;
    }
    console.log(html)
    $("#tableTRM").html(html);
}

let counter = 0;

$(document).on("click", "#procesar", function () {
    console.log("Has hecho clic en procesar");
    // let limit = parse
    fetch("https://www.datos.gov.co/resource/ceyp-9c7c.json")
        .then(response => response.json())
        .then(data => {
            if (typeof jQuery !== 'undefined' && $('#myTable').length) {
                $('#myTable').DataTable({
                    language: {
                        url: "https://cdn.datatables.net/plug-ins/2.0.3/i18n/es-ES.json"
                    }
                });
            }
            fillTable(data)
        });
    // $("#contenido").html(`Has hecho clic en procesar ${counter++} veces`);
})

// DATATABLE
// document.addEventListener("DOMContentLoaded", function() {
// $(document).ready(function () {
//     if (typeof jQuery !== 'undefined' && $('#myTable').length) {
//         $('#myTable').DataTable({
//             pagin: true,
//             language: {
//                 url: "https://cdn.datatables.net/plug-ins/2.0.3/i18n/es-ES.json"
//             }
//         });
//     }
// })
