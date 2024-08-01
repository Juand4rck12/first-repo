import React from "react"
import './App.css'
import RickAndMortyCard from "./components/card/rickAndMortyCard"

function App() {
  
  return (
    <div className="papa">
      <div className="tituloPagina">
      <h1>PERSONAJES DE RICK AND MORTY</h1>
      <RickAndMortyCard id={1}/>
      <RickAndMortyCard id={2}/>
      <RickAndMortyCard id={3}/>
      <RickAndMortyCard id={4}/>
      </div>
    </div>
  )
}

export default App
