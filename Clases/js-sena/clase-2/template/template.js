// Selección de elementos del DOM
const form = document.getElementById("formulario");
const btnGetCustomers = document.getElementById("btn-list-customers");
const btnAddCustomers = document.getElementById("btn-save-customer");
const btnUpdateCustomer = document.getElementById("btn-update-customer");
const tableBody = document.getElementById("table-content");
let currentCustomerId = null; // Almacenar el ID del cliente en edición

// Funciones auxiliares
function getFormData() {
    return {
        document: document.getElementById("document").value,
        name: document.getElementById("fullname").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value
    };
}

function resetFormAndButtons() {
    form.reset();
    btnUpdateCustomer.disabled = true;
    btnAddCustomers.disabled = false;
    currentCustomerId = null;
}

// Funciones de la API
async function fetchCustomers() {
    try {
        const response = await fetch("http://localhost:3000/hardwarestore/customers");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}

async function addCustomer(formData) {
    try {
        // Validar formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }
        // Validar longitud mínima del teléfono
        if (formData.phone.length < 10) {
            alert("El teléfono debe tener al menos 10 dígitos.");
            return;
        }

        const response = await fetch("http://localhost:3000/hardwarestore/customers/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        alert(data.message);
        resetFormAndButtons();
        btnGetCustomers.click();
    } catch (error) {
        console.error("Error al insertar cliente:", error);
    }
}

async function loadCustomerData(id) {
    try {
        const data = await fetchCustomers();
        const customer = data.find(customer => customer.id_customer == id);
        if (customer) {
            document.getElementById("document").value = customer.document;
            document.getElementById("fullname").value = customer.name;
            document.getElementById("phone").value = customer.phone;
            document.getElementById("address").value = customer.address;
            document.getElementById("email").value = customer.email;
            btnAddCustomers.disabled = true;
            btnUpdateCustomer.disabled = false;
            currentCustomerId = id;
        }
    } catch (error) {
        console.error("Error al cargar datos del cliente:", error);
    }
}

async function updateCustomer(id) {
    try {
        const formData = getFormData();
        const response = await fetch(`http://localhost:3000/hardwarestore/customers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        alert(data.message);
        resetFormAndButtons();
        btnGetCustomers.click();
    } catch (error) {
        console.error("Error al actualizar cliente:", error);
    }
}

async function deleteCustomer(id) {
    try {
        const response = await fetch(`http://localhost:3000/hardwarestore/customers/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        alert(data.message);
        btnGetCustomers.click();
    } catch (error) {
        console.error("Error al eliminar el cliente:", error);
    }
}

// Renderizar tabla de clientes
function renderCustomerTable(data) {
    let content = "";
    data.forEach(customer => {
        content += `
            <tr>
                <td>${customer.document}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.address}</td>
                <td>${customer.email}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm btnEditCustomer" data-id="${customer.id_customer}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm btnDeleteCustomer" data-id="${customer.id_customer}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    tableBody.innerHTML = content;

    document.querySelectorAll(".btnEditCustomer").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            loadCustomerData(id);
        });
    });

    document.querySelectorAll(".btnDeleteCustomer").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            if (confirm('¿Estás seguro de eliminar este cliente?')) {
                deleteCustomer(id);
            }
        });
    });
}

// Event Listeners
btnGetCustomers.addEventListener("click", async (e) => {
    e.preventDefault();
    resetFormAndButtons();
    const data = await fetchCustomers();
    renderCustomerTable(data);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addCustomer(getFormData());
});

btnUpdateCustomer.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentCustomerId) {
        updateCustomer(currentCustomerId);
    } else {
        alert("No se ha seleccionado un cliente para actualizar.");
    }
});