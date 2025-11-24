class Persona {
    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }   

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    }
    
    static saludar() {
        console.log("Saludos desde método static")
    }

    static saludar2(persona) {
        console.log(persona.nombre);
    }
}


class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento () {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    // sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
        // return `${super.nombreCompleto()}, ${this._departamento}`;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre); // Get nombre


let empleado1 = new Empleado('Maria', 'Lopez', 'Sistemas');
console.log(empleado1)
console.log(empleado1.nombreCompleto());

// persona1.saludar(); // No es posible usar un método static desde un objeto.
Persona.saludar();
Persona.saludar2(persona1);