import React from 'react'
import './Header.css' 

function Header() {
  

  return (
    <div className='header'>
      <nav className='top'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Servie</a>
        <button className='log-btn'>Login form</button>
      </nav>
    </div>
  )
}

export default Header