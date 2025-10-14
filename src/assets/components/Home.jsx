import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <>
        <header id='header'>
     <Navbar />
    </header>
    <main>
      <div className='frontPage'>
        {/* <Link to='/film'>
        <div className='circle1'>  <p className='film'>FILM</p> </div>
        </Link>
        <Link to='/dev'>
        <div className='circle2'><p className='dev'>DEV</p></div>
        </Link>
        <Link to='/stills'>
        <div className='circle3'> <p className='stills'>STILLS</p></div>
        </Link> */}
       <div className='calzolaio' >
      <h4 className='landing'>Il calzolaio va in giro con le scarpe rotte...
      Per questo il mio sito è ancora un "work in progress"</h4>
      </div>
      <div className='intro' >
       <h4>Do forma alle emozioni con le immagini e sviluppo siti web.</h4> 
       </div>
       <p><a href='https://alessandropuccini.my.canva.site/' target='blank' rel='noopener noreferrer'> Clicca qui</a> per visionare il mio portfolio</p>
       

     </div>
    
    </main>
    <Footer />
    </>
  )
}

export default Home
