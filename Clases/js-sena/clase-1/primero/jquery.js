// $("#procesar").click(function () {
//     console.log("Has hecho clic en procesar")
// })

let counter = 0;

$(document).on("click", "#procesar", function() {
    console.log("Has hecho clic en procesar");
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.results[0].name);

        const result = data.results[0];

        let name = result.name;
        let fullname = `${name.title} ${name.first} ${name.last}`
        let gender = result.gender == "male" ? "Hombre" : "Mujer"
        console.log(fullname)

        $("#genderUser").html(gender)
        $("#nameUser").html(fullname);
        $("#photoUser").attr("src", result.picture.large);
    });
    // $("#contenido").html(`Has hecho clic en procesar ${counter++} veces`);
})


console.log("asjdas")