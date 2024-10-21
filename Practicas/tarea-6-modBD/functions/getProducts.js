import fs from 'fs/promises';

// Get /
export const get = (req, res) => {
    res.json({
        message: 'Hola! Escribe /products para ver la lista de productos'
    })
}

// Get /products
export const getProducts = async (req, res) => {
    const response = await fs.readFile('./data.json', 'utf-8');
    const products = await JSON.parse(response);
    res.send(products);
}

// Get /products/:id
export const getProductsById = async (req, res) => {
    try {
        const response = await fs.readFile('./data.json', 'utf-8');
        const products = await JSON.parse(response);
        const id = parseInt(req.params.id);
        const result = products.find((product) => product.id === id)
        if (result) {
            res.send(result)
        } else {
            res.status(404).json({
                message: 'Product not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ocurrio un error.'
        })
    }
}

// Get /products/name/:name
export const getProductsByname = async (req, res) => {
    try {
        const response = await fs.readFile('./data.json', 'utf-8');
        const products = await JSON.parse(response);
        const name = req.params.name
        const result = products.filter((product) => product.name.includes(name))
        if (result) {
            res.send(result)
        } else {
            res.status(404).json({
                message: 'Product not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ocurrio un error.'
        })
    }
}