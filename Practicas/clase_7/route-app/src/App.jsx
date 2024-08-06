import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/homePage'
import AboutPage from './pages/aboutPage/aboutPage'
import NavBarComponent from './components/navBar/navBarComponent'
import UserPage from './pages/userPage/userPage'
import NotFoundPage from './pages/notFound/notFoundPage'
import UserParam from './pages/userParamPage/userParam'

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/about' element={<AboutPage />} ></Route>
          <Route path='/user/:id' element={<UserPage />} ></Route>
          <Route path='/param/:id' element={<UserParam />} ></Route>
          <Route path='/*' element={<NotFoundPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
