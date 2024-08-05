import React, { useState, useEffect } from 'react'
import CharacterCard from '../showCard/characterCard';

const RickAndMortyCard = () => {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, '==> data result')
        setCharactersList(data.results)
      })
  }, []) // arreglo de dependencias vacío aquí como segundo argumento para que se ejecute una sola vez

  return (
    <div className="cards-page">
      {charactersList.map((character) => (
        <CharacterCard 
          key={character.id}
          name={character.name}
          image={character.image}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </div>
  )
}

export default RickAndMortyCard