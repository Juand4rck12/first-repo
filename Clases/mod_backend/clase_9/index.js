import express from 'express';
import { getBooks, getBooksById, getBooksByTitle } from './functions/getBooks.js';
import { deleteBooks } from './functions/deleteBooks.js';
import { createBooks } from './functions/createBooks.js';
import { updateBook } from './functions/updateBooks.js';
import { bodyValidation } from './middleware/index.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.get('/books', getBooks);

app.get('/books/:id', getBooksById);

app.get('/books/title/:title', getBooksByTitle);

app.delete('/books/:id', deleteBooks)

app.post('/books', bodyValidation, createBooks);

app.put('/books/:id', updateBook)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})