import express from 'express';
import { getBooks, getBooksById, getBooksByTitle } from './functions/getBooks.js';
import { deleteBooks } from './functions/deleteBooks.js';
import { createBooks } from './functions/createBooks.js';
import { updateBook } from './functions/updateBooks.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
})

app.get('/books', getBooks);

app.get('/books/:id', getBooksById);

app.get('/books/title/:title', getBooksByTitle);

app.delete('/books/:id', deleteBooks)

app.post('/books', createBooks);

app.put('/books/:id', updateBook)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})