import mysql from 'mysql2/promise';
import express from 'express';

const app = express();
const port = 3000;

// Add this middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501'); // Or '*' for all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Crear la conexion
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'developer',
    password: 'developer',
    database: 'hardwarestore_db'
});


app.get('/hardwarestore/customers', async (req, res) => {
    try {
        const [rows] = await connection.query(
            'SELECT * FROM customer'
        );
        res.status(200).json(rows);

        // connection.end();
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

app.listen(port, () => {
    console.log(`Servidor activo en el puerto ${port}`);
})