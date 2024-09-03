import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  return (
    <>
        <header id='header'>
     <Navbar />
    </header>
    <main>
      <div className='frontPage'>
        <Link to='/film'>
        <div className='circle1'>  <p className='film'>FILM</p> </div>
        </Link>
        
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

export default Home
