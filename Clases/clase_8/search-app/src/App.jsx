import { useState } from 'react'
import './App.css'
import { Container, Form, InputGroup, Table } from 'react-bootstrap'
import { data } from '../data'

function App() {

  console.log(data, "<== Data")

  const [search, setSearch] = useState('')

  return (
    <div>
      <Container>
        <h1>EJERCICIO SEARCH</h1>
        <Form>
          <InputGroup>
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Escribe la persona que busca' />
          </InputGroup>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Primer Nombre</th>
              <th>Primer Apellido</th>
              <th>Correo Electronico</th>
              <th>Ip Dirección</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search)
            }).map((item) => (
              <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.ip_address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default App
