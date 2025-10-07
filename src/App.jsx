import { Routes, Route, Link } from 'react-router-dom'
import Film from './assets/components/pages/Film'
import Dev from './assets/components/pages/Dev'
import Stills from './assets/components/pages/Stills'
import Home from './assets/components/Home'
import About from './assets/components/pages/About'
import Contact from './assets/components/pages/Contact'



function App() {
return (
  <> 
  <Routes>
    <Route path='/' element={<Home />} />
    {/* <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/film' element={<Film />} />
    <Route path='/dev' element={<Dev />} /> 
    <Route path='/stills' element={<Stills />} /> */}
  </Routes>
    </>
  )
}

export default App
