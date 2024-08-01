import React from "react"
import './App.css'
import RickAndMortyCard from "./components/card/rickAndMortyCard"

function App() {

  return (
    <div>
      <h1>PERSONAJES DE RICK AND MORTY</h1>
      <div className="cards-page">
        <RickAndMortyCard id={1} />
        <RickAndMortyCard id={2} />
        <RickAndMortyCard id={3} />
        <RickAndMortyCard id={4} />
        <RickAndMortyCard id={5} />
        <RickAndMortyCard id={7} />
        <RickAndMortyCard id={8} />
        <RickAndMortyCard id={9} />
      </div>
    </div>
  )
}

export default App
