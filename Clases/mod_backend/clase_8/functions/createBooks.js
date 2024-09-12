import fs from 'fs/promises'

const result = await fs.readFile('books.json', 'utf-8');
const books = JSON.parse(result);

export const createBooks = async (req, res) => {
    books.push(req.body);
    await fs.writeFile('books.json', JSON.stringify(books));
    res.send(`Se ha agregado el libro ${req.body.title}`);
}