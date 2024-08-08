import React from 'react'
import RickAndMortyCard from '../../components/card/rickAndMortyCard'
import '../../App.css'

const CharacterPage = () => {
  return (
    <div>
      <h1>PERSONAJES DE RICK AND MORTY</h1>
      <div>
        <RickAndMortyCard />
      </div>
    </div>
  )
}

export default CharacterPage