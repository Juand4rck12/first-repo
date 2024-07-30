import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hook state</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador {count}
        </button>
      </div>
    </>
  )
}

export default App
