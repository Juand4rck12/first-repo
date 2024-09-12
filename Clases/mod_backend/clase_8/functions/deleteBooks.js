import fs from 'fs/promises';

const result = await fs.readFile('books.json', 'utf-8');
const books = JSON.parse(result);

export const deleteBooks = async (req, res) => {
    const id = req.params.id;
    const result = books.findIndex((book) => book.id === parseInt(id))
    if (result !== -1) {
        books.splice(result, 1)
        await fs.writeFile('books.json', JSON.stringify(books));
        res.send(`Se ha eliminado el libro con el id ${id}`)
    } else {
        res.status(404)
        res.send('Book not found')
    }
}