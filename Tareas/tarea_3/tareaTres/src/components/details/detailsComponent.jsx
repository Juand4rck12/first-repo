import React from 'react'

export const Details = (props) => {
    console.log(props, 'props details')
  return (
    <div>
        <p>
          <b>Genero:</b> {props.genre}
        </p>
        <p>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  )
}
