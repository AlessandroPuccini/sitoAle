import { useState } from 'react'
import Navbar from './assets/components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header id='header'>
     <Navbar />
    </header>
    <main>
      <div className='frontPage'>
     
        <div className='circle1'>  <p className='film'>FILM</p> </div>
      
        
        <div className='circle2'><p className='dev'>DEV</p></div>
        

        <div className='circle3'> <p className='stills'>STILLS</p></div>
       
      </div>
    </main>
    <footer>
      <div className='footer'>
        <p>© 2024 AP</p>
      </div>
    </footer>
    </>
  
  )
}

export default App
