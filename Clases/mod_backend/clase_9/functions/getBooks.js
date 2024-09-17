import fs from 'fs/promises';
import express from 'express';
const app = express();

const result = await fs.readFile('books.json', 'utf-8');
const books = JSON.parse(result);

export const getBooks = app.get('/books', (req, res) => {
    res.send(books)
})

export const getBooksById = async (req, res) => {
    const id = req.params.id
    const resultBookById = books.find((book) => book.id === parseInt(id))
    if (resultBookById) {
        res.send(resultBookById)
    } else {
        res.status(404)
        res.send('Book not found')
    }
}

export const getBooksByTitle = async (req, res) => {
    const title = req.params.title
    // const result = books.filter((book) => book.title.startsWith(title))
    const result = books.filter((book) => book.title.includes(title))
    if (result) {
        res.send(result)
    } else {
        res.status(404)
        res.send('Book not found')
    }
}