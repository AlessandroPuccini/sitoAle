import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
 
    <nav>
        <div className='logo-name'>
        <Link to='/'>
          <h3>ALESSANDRO <br/>PUCCINI</h3>
        </Link>
        </div>
        <div className='menu-items'>
        <ul>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
        </div>
    </nav>
  


  )
}
export default Navbar
