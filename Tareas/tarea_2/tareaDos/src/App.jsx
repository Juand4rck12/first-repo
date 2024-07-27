import React from 'react'
import './App.css'

function App() {
  return (
    <div className='card'>
      <a href="https://es.wikipedia.org/wiki/Miles_Morales" target='blank'>
        <img id='img' src="./miles_morales.jpg" alt="Foto personaje" />
      </a>
      <div className="container">
        <h2>Spider-Man Miles Morales</h2>
        <p>
          Es un personaje de cómic creado por Marvel Comics. Es un adolescente que adquiere superpoderes similares a los de Spider-Man después de ser picado por una araña genéticamente modificada. A diferencia de Peter Parker, el Spider-Man original, Miles es afroamericano y latino y se crió en el barrio de Brooklyn en Nueva York.
        </p>
      </div>
    </div>
  );
}

export default App;
