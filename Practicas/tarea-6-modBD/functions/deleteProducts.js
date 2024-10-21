import fs from 'fs/promises';

export const deleteProducts = async (req, res) => {
    try {
        const response = await fs.readFile('./data.json', 'utf-8');
        const products = await JSON.parse(response);
        const id = parseInt(req.params.id);
        const result = products.findIndex((product) => product.id === id);

        if (result !== -1) {
            const deletedProduct = products.splice(result, 1);
            await fs.writeFile('./data.json', JSON.stringify(products));
            res.json({
                message: `Se ha eliminado el producto con el id ${id}`,
                deletedProduct: deletedProduct[0]
            })

        } else {
            
            return res.status(404).json({
                message: 'Product not found'
            }); 
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ocurrio un error al eliminar el producto'
        })
    }
}