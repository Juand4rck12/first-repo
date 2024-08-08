import React from 'react'

const CharacterCard = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <img src={props.image} alt="image" />
      <p><b>Gender: </b>{props.gender}</p>
      <p><b>Status: </b>{props.status}</p>
    </div>
  )
}

export default CharacterCard