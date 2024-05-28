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
     
        <div className='circle1'>  <p className='film'>FILM</p> </div>
      
        
        <div className='circle2'><p className='dev'>DEV</p></div>
        

        <div className='circle3'> <p className='stills'>STILLS</p></div>
       
      </div>
    </main>
    </>
  
  )
}

export default App
