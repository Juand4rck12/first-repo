const suma = (a, b) => {
    return a + b;
}

const resta = (a, b) => {
    return b - a;
}

const multiplicacion = (a, b) => {
    return a * b;
}

const division = (a, b) => {
    if (b === 0) {
        return 'Error: No se puede dividir entre 0';
    }
    return a / b;
}

const calculadora = () => {
    // Captura los argumentos de la línea de comandos
    const args = process.argv.slice(2);
    
    if (args.length !== 3) {
        console.log(
            'Uso: node calculadora.js [número1] [operación] [número2] || Recuerda los espacios');
        return;
    }

    // Convertir los argumentos en números y operación
    const num1 = parseFloat(args[0]);
    const operacion = args[1];
    const num2 = parseFloat(args[2]);

    let resultado;

    switch (operacion) {
        case '+':
            resultado = suma(num1, num2);
            break;
        case '-':
            resultado = resta(num1, num2);
            break;
        case '*':
            resultado = multiplicacion(num1, num2);
            break;
        case '/':
            resultado = division(num1, num2);
            break;
        default:
            console.log('Operación no reconocida. Usa +, -, * o /.');
            return;
    }

    console.log(`Resultado: ${resultado}`);
}

// Ejecutar la calculadora
calculadora();
