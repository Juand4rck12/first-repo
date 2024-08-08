import React, { useState, useEffect } from 'react'
import CharacterCard from '../showCard/characterCard';
import PaginationComponent from '../pagination/paginationComponent';

const RickAndMortyCard = () => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const fetchCharacters = async (page) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const characters = await response.json()
      console.log(characters, '==> Characters result')
      console.log(characters.info.pages, '==> Total pages')

      setCharacters(characters.results)
      setInfo(characters.info)
    } catch (error) {
      console.error("Error fetching characters:", error)
    }
  }

  useEffect(() => {
    fetchCharacters(currentPage)
  }, [currentPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <>
      <div className="cards-page">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />
        ))}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={info.pages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default RickAndMortyCard