import React from 'react'
import About from './About'
import { Routes, Route, Link } from 'react-router-dom'
import App from '../../App'

function Navbar() {
  return (
 
    <nav>
        <div className='logo-name'>
        
          <h3>ALESSANDRO <br/>PUCCINI</h3>
        </div>
        <div className='menu-items'>
        <ul>
            <li><Link to='/sitoAle/about'>ABOUT</Link></li>
            <li><a href='#contact'>CONTACT</a></li>
        </ul>
        </div>
    </nav>
  


  )
}
export default Navbar
