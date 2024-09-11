import express from 'express';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT  // || 3002;
app.use(express.json());

let students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

app.use((req, res, next) => {
    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
})

app.get('/students', (req, res) => {
    res.send(students)
})

// Busqueda por ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const result = students.filter((student) => student.id === id)
    if (result.length > 0) {
        res.send(result)
    } else {
        res.status(404)
        res.send('Student not found')
    }
})

// Busqueda por nombre
app.get('/students/name/:name', (req, res) => {
    const name = req.params.name
    const result = students.filter((student) => student.name === name)
    if (result.length > 0) {
        res.send(result)
    } else {
        res.status(404)
        res.send('Student not found')
    }
})

app.post('/students', (req, res) => {
    students.push(req.body)
    res.send(`Se ha agregado el estudiante ${req.body.name}`)
})

app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const index = students.findIndex((student) => student.id === parseInt(id))
    students[index] = req.body
    res.send(`Se ha actualizado el estudiante`)
})

app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    const result = students.findIndex((student) => student.id === parseInt(id))
    if (result !== -1) {
        students.splice(result, 1)
        res.send(`Se ha eliminado el estudiante con el id ${id}`)
    } else {
        res.status(404)
        res.send('Student not found')
    }
})

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)
})
