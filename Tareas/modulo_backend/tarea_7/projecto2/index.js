import express from 'express';
import { readFile, writeFile } from 'fs';
import 'dotenv/config';

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

let students = [];

app.use((req, res, next) => {

    const log = {
        method: req.method,
        date: new Date().toLocaleDateString(),
        url: req.url
    }
    console.log(log)
    next()
})

const readStudentsFile = (callback) => {

    readFile('students.json', (error, data) => {
        if (error) {
            console.log(error);
            callback([]);
        } else {
            callback(JSON.parse(data));
        }
    })
}

const writeStudentsFile = (data, callback) => {
    // Sintaxis JSON.stringify()
    // JSON.stringify(value, replacer, space)
    writeFile('students.json', JSON.stringify(data, null, 2), (error) => {

        if (error) {
            console.error(error);
            callback(false);
        } else {
            callback(true);
        }

    })
}

readStudentsFile((data) => {
    students = data;
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

// Obtener todos los estudiantes
app.get('/students', (req, res) => {
    res.send(students);
})

// Estudiantes filtrados por ID
app.get('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const result = students.filter((student) => student.id === id);

    if (result.length > 0) {
        res.send(result);
    } else {
        res.status(404);
        res.send('Student not found.');
    }

})

// **TRABAJAR SOBRE REFERENCIA EN MEMORIA PRIMERO Y DESPUES EN ARCHIVO ORIGINAL**
// Agregar nuevo estudiante
app.post('/students', (req, res) => {

    const newStudent = req.body;
    students.push(newStudent);

    writeStudentsFile(students, (sucess) => {
        if (sucess) {
            res.send(`Student added`);
        } else {
            res.status(404);
            res.send('Error adding student, go to "/students"');
        }
    })

})

// Editar o actualizar un estudiante que ya existe
app.put('students/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const stdIndex = students.findIndex((student) => student.id === id);

    // Si stdIndex es = -1 quiere decir que no existe el estudiante con ese ID
    if (stdIndex !== -1) {
        /* se copian las propiedades del objeto original mediante el operador spread (...) y
         se sobreescribe solo con aquellas que vienen en req.body, manteniendo las que no se
         les haya producido cambios.*/
        students[stdIndex] = { ...students[stdIndex], ...req.body };
        writeStudentsFile(students, (sucess) => {
            if (sucess) {
                res.send(`Student with ID: ${id} updated.`);
            } else {
                res.status(404);
                res.send('Error updating student');
            }
        })

    } else {
        res.status(404);
        res.send('Student not found');
    }
})

// Eliminar estudiante por su ID (metodo temporal)
app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const stdIndex = students.findIndex((student) => student.id === id);

    if (stdIndex !== -1) {
        students.splice(stdIndex, 1); // Se elimina 1 estudiante
        writeStudentsFile(students, (sucess) => {
            if (sucess) {
                res.send(`Student with ID ${id} sucessful deleted`);
            } else {
                res.status(404);
                res.send('Error deleting student');
            }
        })

    } else {
        res.status(404);
        res.send('Student not found');
    }
})

// ELIMINAR DIRECTAMENTE TRABAJANDO SOBRE EL ARCHIVO
// app.delete('/students/:id', (req, res) => {
//     const id = parseInt(req.params.id);

//     // Leer el archivo antes de realizar la operación
//     readFile('students.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return res.status(500).send('Error reading students file');
//         }

//         let students = JSON.parse(data);
//         const studentIndex = students.findIndex(s => s.id === id);

//         if (studentIndex !== -1) {
//             students.splice(studentIndex, 1); // Eliminar estudiante
//             // Escribir el archivo después de la modificación
//             writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
//                 if (err) {
//                     console.error('Error writing file:', err);
//                     return res.status(500).send('Error deleting student');
//                 }
//                 res.send(`Student with ID ${id} deleted`);
//             });
//         } else {
//             res.status(404).send('Student not found');
//         }
//     });
// });
