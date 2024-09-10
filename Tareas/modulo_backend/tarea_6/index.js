import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT;

const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

const findProductById = (idP) => {
    const product = products.find(p => p.id === idP);
    return product ? JSON.stringify(product) : null;
}

http.createServer((req, res) => {

    const urlParts = req.url.split('/');

    switch (urlParts[1]) {
        case '':
            res.write('Estas en el home :)');
            break;
        case 'products':
            res.write(JSON.stringify(products))
            break;
        case 'products':
            
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.write('Error 404: Not Found')
    }
    res.end()
}).listen(PORT);