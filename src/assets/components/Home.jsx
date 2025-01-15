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
        <Link to='alessandropuccini/film'>
        <div className='circle1'>  <p className='film'>FILM</p> </div>
        </Link>
        <Link to='alessandropuccini/dev'>
        <div className='circle2'><p className='dev'>DEV</p></div>
        </Link>
        <Link to='alessandropuccini/stills'>
        <div className='circle3'> <p className='stills'>STILLS</p></div>
        </Link>
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
