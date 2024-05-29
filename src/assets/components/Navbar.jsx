import React from 'react'

function Navbar() {
  return (
  
    <nav>
        <div className='logo-name'>
           <h3>ALESSANDRO <br/>
            PUCCINI</h3>
        </div>
        <div className='menu-items'>
        <ul>
            <li><a href='#about'>ABOUT</a></li>
            <li><a href='#contact'>CONTACT</a></li>
        </ul>
        </div>
    </nav>

  )
}
export default Navbar
