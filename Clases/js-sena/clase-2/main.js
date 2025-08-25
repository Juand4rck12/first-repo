import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'developer',
    password: 'developer',
    database: 'hardwarestore_db'
});

connection.connect((error) => {
    if (error) {
        console.error("Ocurrio un error al conectar con la bd: ", error.stack);
        return;
    }
    console.log("Conexión exitosa a la bd con ID ", connection.threadId)
});


connection.query("SELECT * FROM customers", (error, results, fields) => {
    if (error) throw error
    console.log("Clientes: ", results);
})

connection.end((error) => {
    if (error) {
        console.error("Error al cerrar la conexión ", error.stack);
        return;
    }
    console.log("Conexión a MySQL Cerrada");
})