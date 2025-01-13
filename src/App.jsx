import { Routes, Route, Link } from 'react-router-dom'
import Film from './assets/components/Film'
import Dev from './assets/components/Dev'
import Stills from './assets/components/Stills'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'



function App() {
  return (
  <> 
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/film' element={<Film />} />
    <Route path='/dev' element={<Dev />} /> 
    <Route path='/stills' element={<Stills />} />
  </Routes>
    </>
  )
}

export default App
