import { useState } from 'react'
import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header id='header'>
     <Navbar />
    </header>
    </>
  
  )
}

export default App
