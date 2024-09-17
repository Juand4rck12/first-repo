import fs from 'fs/promises';

const result = await fs.readFile('books.json', 'utf-8');
const books = JSON.parse(result);

export const updateBook = async (req, res) => {
    const id = req.params.id;
    const index = books.findIndex((book) => book.id === parseInt(id))
    books[index] = req.body
    await fs.writeFile('books.json', JSON.stringify(books));
    res.send(`Se ha actualizado el libro`)
}