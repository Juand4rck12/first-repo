import React from 'react'

const CharacterCard = (props) => {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <img src={props.image} alt="image" />
        <p>
            <b>Gender: {props.gender}</b>
        </p>
        <p>
            <b>Status: {props.status}</b>
        </p>
    </div>
  )
}

export default CharacterCard