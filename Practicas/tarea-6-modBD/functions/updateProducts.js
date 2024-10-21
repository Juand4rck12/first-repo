import fs from 'fs/promises'

export const updateProducts = async (req, res) => {
    try {
        const response = await fs.readFile('./data.json', 'utf-8')
        const products = await JSON.parse(response)
        const id = req.params.id
        const index = products.findIndex((product) => product.id === parseInt(id))
        products[index] = req.body
        await fs.writeFile('./data.json', JSON.stringify(products))
        if(index != -1) {
            res.send('Se ha actualizado el producto.')
        } else {
            res.json({
                message: 'Product not found'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ocurrio un error al actualizar el producto.'
        })
        
    }
}