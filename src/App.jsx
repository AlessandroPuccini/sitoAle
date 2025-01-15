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
    <Route path='alessandropuccini/' element={<Home />} />
    <Route path='alessandropuccini/about' element={<About />} />
    <Route path='alessandropuccini/contact' element={<Contact />} />
    <Route path='alessandropuccini/film' element={<Film />} />
    <Route path='alessandropuccini/dev' element={<Dev />} /> 
    <Route path='alessandropuccini/stills' element={<Stills />} />
  </Routes>
    </>
  )
}

export default App
