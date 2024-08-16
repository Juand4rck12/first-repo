import React from 'react'

export const Tarjeta = (props) => {
    console.log(props,'props tarjeta')
  return (
    <div className='card'>
        <img src="./rick.jpg" alt="imagen" />
        <h1>{props.name}</h1>
        <p>{props.descripcion}</p>
    </div>
  )
}
