import mysql from 'mysql2/promise';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
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

// ...existing code...

app.get('/hardwarestore/customers', async (req, res) => {
    try {
        // Parámetros de DataTables
        const draw = req.query.draw;
        const start = parseInt(req.query.start) || 0;
        const length = parseInt(req.query.length) || 10;
        const search = req.query.search?.value || '';
        
        // Consulta para el total de registros
        const [total] = await connection.query(
            'SELECT COUNT(*) as total FROM customer'
        );
        
        // Consulta con búsqueda
        let searchQuery = '';
        let params = [];
        
        if (search) {
            searchQuery = `WHERE document LIKE ? 
                         OR name LIKE ? 
                         OR phone LIKE ? 
                         OR address LIKE ? 
                         OR email LIKE ?`;
            params = Array(5).fill(`%${search}%`);
        }
        
        // Consulta para registros filtrados
        const [filtered] = await connection.query(
            `SELECT COUNT(*) as filtered FROM customer ${searchQuery}`,
            params
        );
        
        // Consulta principal con paginación
        const [rows] = await connection.query(
            `SELECT id_customer, document, name, phone, address, email 
             FROM customer ${searchQuery} 
             LIMIT ? OFFSET ?`,
            [...params, length, start]
        );
        
        res.status(200).json({
            draw: parseInt(draw),
            recordsTotal: total[0].total,
            recordsFiltered: filtered[0].filtered,
            data: rows
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// ...existing code...

// app.get('/hardwarestore/customers', async (req, res) => {
//     try {
//         const [rows] = await connection.query(
//             'SELECT id_customer, document, `name`, phone, address, email FROM customer'
//         );
//         res.status(200).json(rows);

//         // connection.end();
//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         })
//     }
// });

app.post('/hardwarestore/customers/add', async (req, res) => {
    const { document, name, phone, address, email } = req.body;
    try {
        const [result] = await connection.execute(
            'INSERT INTO customer (`document`, `name`, `phone`, `address`, `email`) VALUES (?, ?, ?, ?, ?)',
            [document, name, phone, address, email]
        );
        res.status(201).json({
            message: 'Cliente añadido exitosamente'
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

app.delete('/hardwarestore/customers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await connection.execute(
            'DELETE FROM customer WHERE id_customer = ?', [id]
        );
        res.status(200).json({
            message: 'Cliente eliminado exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

app.put('/hardwarestore/customers/:id', async (req, res) => {
    const { id } = req.params;
    const { document, name, phone, address, email } = req.body;
    try {
        const [result] = await connection.execute(
          'UPDATE customer SET `document` = ?, `name` = ?, `phone` = ?, `address` = ?, `email` = ? WHERE id_customer = ?',
          [document, name, phone, address, email, id]
        );
        res.status(200).json({
            message: 'Cliente actualizado exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

app.listen(port, () => {
    console.log(`Servidor activo en el puerto ${port}`);
})