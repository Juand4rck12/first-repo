import React from 'react'
import RickAndMortyCard from '../../components/card/rickAndMortyCard'
import '../../App.css'

const CharacterPage = () => {
  return (
    <div>
      <h1>RICK AND MORTY CHARACTERS</h1>
      <div>
        <RickAndMortyCard />
      </div>
    </div>
  )
}

export default CharacterPage