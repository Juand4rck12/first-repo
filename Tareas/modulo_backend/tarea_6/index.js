import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT // || 3002;

const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.write('Estas en el home :)');
            break;
        case '/products':
            res.write(JSON.stringify(products))
            break;
        // case '/products/:id':
        //     const id = req.url.id
        //     const result = products.filter((product) => product.id === id)
        //     res.write(result)
        //     break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.write('Error 404: Not Found')
    }
    res.end()
}).listen(PORT);