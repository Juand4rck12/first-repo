import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/homePage";
import CharacterPage from "./pages/characters/characterPage";
import EpisodesPage from "./pages/episodes/episodesPage";
import NotFoundPage from "./pages/notFound/notFoundPage";
import NavBarComponent from "./components/navBar/navBarComponent";

function App() {

  return (
    <div className="homePage">
    <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePage /> }></Route>
          <Route path="/characters" element={<CharacterPage />}></Route>
          <Route path="/episodes" element={<EpisodesPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
