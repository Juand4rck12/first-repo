import React from 'react'

const EpisodeCard = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <h3>{props.episode}</h3>
      <p><b>Date: </b>{props.date}</p>
    </div>
  )
}

export default EpisodeCard