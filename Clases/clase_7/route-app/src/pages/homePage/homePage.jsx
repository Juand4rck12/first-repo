import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const userid = 10;

  return (
    <div>
        <h1>BIENVENIDO A HOME</h1>
        <ul>
            <li><Link to='/user'>Usuarios</Link></li>
            <li><Link to={`/user/${userid}`}>Usuarios parametro</Link></li>
        </ul>
    </div>
  )
}

export default HomePage