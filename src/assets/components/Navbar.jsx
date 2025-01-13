import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
 
    <nav>
        <div className='logo-name'>
        <Link to='/sitoAle/'>
          <h3>ALESSANDRO <br/>PUCCINI</h3>
        </Link>
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
