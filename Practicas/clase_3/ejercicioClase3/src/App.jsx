import './App.css'
import { Nombre } from './components/nombre/nombreComponents'
import { Descripcion } from './components/descripcion/descripcionComponents'
import { Imagen } from './components/images/imagenComponents'

function App() {

  return (
    <div className='card'>
      <Imagen />
      <Nombre name = 'Rick'/>
      <Descripcion descripcion = 'Hola como estas'/>
      <p>
        Hola
      </p>
    </div>
  )
}

export default App
