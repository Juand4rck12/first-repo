import React from 'react'
import { useParams } from 'react-router-dom'

const UserParam = () => {

    const param = useParams();

    console.log(param, '==> param')

  return (
    <div>
        <ul>
            <li>
                <h2>Nombre ID: {param.id}</h2>
            </li>
        </ul>
    </div>
  )
}

export default UserParam