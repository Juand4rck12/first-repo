import express from 'express';
import { get, getProducts, getProductsById, getProductsByname } from './functions/getProducts.js';
import { deleteProducts } from './functions/deleteProducts.js';
import { bodyValidation, logMiddleware } from './middlewares/index.js';
import { createProducts } from './functions/createProducts.js';
import { updateProducts } from './functions/updateProducts.js';

const PORT = process.env.PORT || 3002; // Puerto .env O 3002
const app = express();

// Middlewares:
app.use(express.json());
app.use(logMiddleware)

// Metodos Get:
app.get('/', get);
app.get('/products', getProducts);
app.get('/products/:id', getProductsById);
app.get('/products/name/:name', getProductsByname);

// Metodo delete:
app.delete('/products/:id', deleteProducts);

// Metodo post:
app.post('/products', bodyValidation, createProducts);

// Metodo put:
app.put('/products/:id', bodyValidation, updateProducts);

app.listen(PORT, () => {
    console.log(`server running at port: http://localhost:${PORT}`);
});