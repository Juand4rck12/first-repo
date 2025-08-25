const form = document.getElementById("formulario");
const btnGetCustomers = document.getElementById("btn-list-customers");
const btnAddCustomers = document.getElementById("btn-add-customers");
const tableBody = document.getElementById("table-content");


// Listar todos los clientes
btnGetCustomers.addEventListener("click", function (e) {
    e.preventDefault();
    let content = "";

    fetch("http://localhost:3000/hardwarestore/customers")
        .then(res => res.json())
        .then(data => {

            data.map((data) => {
                content += `
                    <tr>
                        <td>${data.document}</td>
                        <td>${data.name}</td>
                        <td>${data.phone}</td>
                        <td>${data.address}</td>
                        <td>${data.email}</td>
                    </tr>
                `
            })

            tableBody.innerHTML = content;
        })
        .catch(error => {
            console.log("Error al obtener los datos", error)
        })
});


// Añadir nuevo cliente
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // CAMPOS PARA INSERTAR:
    const userDocument = document.getElementById("document").value;
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    fetch("http://localhost:3000/hardware/customers/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "document": userDocument,
            "name": fullname,
            "phone": phone,
            "address": address,
            "email": email
        })
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        alert(data.message);
        form.reset();
        btnGetCustomers.click();
    })
    .catch(error => {
        console.log("Error al insertar cliente: ", error)
    })
});