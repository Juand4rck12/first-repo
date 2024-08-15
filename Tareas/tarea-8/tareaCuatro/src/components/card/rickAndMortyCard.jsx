import React, { useState, useEffect } from 'react';
import CharacterCard from '../showCard/characterCard';
import PaginationComponent from '../pagination/paginationComponent';
import FilterComponent from '../filter/filterComponent';

const RickAndMortyCard = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async (page, query = '') => {
    setLoading(true); // Iniciamos el estado de carga

    const url = query
      ? `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`
      : `https://rickandmortyapi.com/api/character?page=${page}`;

    try {
      const response = await fetch(url);
      const characters = await response.json();

      if (characters.error) {
        setCharacters([]); // Si hay un error, establecemos characters como un arreglo vacío
      } else {
        setCharacters(characters.results || []);
        setInfo(characters.info || {});
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
      setCharacters([]);
    } finally {
      setLoading(false); // Terminamos el estado de carga
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage, query);
  }, [currentPage, query]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1);
  };

  return (
    <>
      <FilterComponent onSearch={handleSearch} />

      {loading ? (
        <h1>Loading...</h1> // Mensaje de carga
      ) : characters.length === 0 ? (
        <h1>No characters found</h1> // Mensaje si no hay resultados
      ) : (
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
      )}

      {!loading && characters.length > 0 && (
        <PaginationComponent
          currentPage={currentPage}
          totalPages={info.pages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default RickAndMortyCard;
