import React from 'react'
import './App.css'
import { Image } from './components/imagen/imageComponent';
import { Title } from './components/titulo/titleComponent';
import { Descripcion } from './components/descripcion/descripcionComponent';
import { Details } from './components/details/detailsComponent';

function App() {
  return (
    <div className='card'>
      <Image />
      <div className="container">
        <Title title='SpiderMan Miles Morales' />
        <Descripcion descripcion='Es un personaje de cómic creado por Marvel Comics. Es un adolescente que adquiere superpoderes similares a los de Spider-Man después de ser picado por una araña genéticamente modificada.' />
        <Details genre = 'masculino' status = 'vivo / personaje ficticio.'/>
      </div>
    </div>
  );
}

export default App;
