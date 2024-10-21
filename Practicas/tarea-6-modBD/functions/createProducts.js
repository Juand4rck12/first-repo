import fs from 'fs/promises';

export const createProducts = async (req, res) => {
    const response = await fs.readFile('./data.json', 'utf-8');
    const products = await JSON.parse(response);

    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    }

    products.push(product)
    await fs.writeFile('./data.json', JSON.stringify(products));
    res.send(`Se ha agregado el producto ${req.body.name}`)
}