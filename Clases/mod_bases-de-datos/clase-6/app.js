const express = require('express');
const router = require('./routes/moviesRoutes')

const PORT = process.env.PORT || 3000;

const APP = express();

APP.use(express.json());

APP.get('/', (req, res) => {
    res.send('Hello word!')
})

APP.use(router)

APP.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

