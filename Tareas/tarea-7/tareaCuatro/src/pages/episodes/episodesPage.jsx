import React from 'react'
import EpisodeCard from '../../components/showCard/episodeCard'
import PaginationComponent from '../../components/pagination/paginationComponent'
import { useState, useEffect } from 'react'

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([])
  const [info, setInfo] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const fetchEpisodes = async (page) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      const episodes = await response.json()
      console.log(episodes, '==> Episodes result')
      console.log(episodes.info.pages, '==> Total pages')

      setEpisodes(episodes.results)
      setInfo(episodes.info)
    } catch (error) {
      console.error("Error fetching episodes:", error)
    }
  }

  useEffect(() => {
    fetchEpisodes(currentPage)
  }, [currentPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <>
      <div className="cards-page">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            name={episode.name}
            episode={episode.episode}
            date={episode.air_date}
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


export default EpisodesPage