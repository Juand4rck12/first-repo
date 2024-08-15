import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const HomePage = () => {
  return (
    <div className="homePage">
      <h1>WELCOME TO THE RICK AND MORTY API PAGE</h1>
      <h3>Quick Links:</h3>
      <div>
        <button>
          <Link to="/characters">
            Go to characters
          </Link>
        </button>
        <button>
          <Link to="/episodes">
            Go to episodes
          </Link>
        </button>
      </div>
    </div>
  )
}

export default HomePage