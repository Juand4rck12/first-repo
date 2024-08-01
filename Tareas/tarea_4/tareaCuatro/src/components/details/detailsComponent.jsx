import React from 'react'

export const Details = (props) => {
    console.log(props, 'props details')
  return (
    <div id='details'>
        <p>
          <b>Genero:</b> {props.gender}
        </p>
        <p>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  )
}
