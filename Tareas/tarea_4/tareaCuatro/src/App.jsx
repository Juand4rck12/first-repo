import React, { useState, useEffect } from 'react';
import './App.css'
import CharacterCard from './components/card/characterCard';

function App() {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  
  const rickAndMortyCharacterId = 1;

  useEffect( ()=> {
    fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
    .then((response)=> response.json())
    .then((result) => {

      console.log(result, '=> resultado')

      setName(result.name)
      setImage(result.image)
      setGender(result.gender)
      setStatus(result.status)
    })
  })

  return (
    <div>
      <h1 id='firstTitle'>PERSONAJES DE RICK AND MORTY</h1>
      <div className='card'>
        <CharacterCard 
        name={name}
        image={image}
        gender={gender}
        status={status} /> 
       </div>
    </div>
  );
}

export default App;
