import { useState } from 'react'
import Navbar from './Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header id='header'>
     <Navbar />
    </header>
    <main>
      <div className='frontPage'>
        
      </div>
    </main>
    </>
  
  )
}

export default App
