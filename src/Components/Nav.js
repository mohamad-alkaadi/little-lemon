import React from 'react'
import logo from './icons_assets/Logo.svg'
import './Component-css/nav.css'
const Nav = () => {
  return (
    <nav className='nav-grid-system'>
      <div className='nav-container'>
        <a href='/home' className='nav-link-logo'><img src={logo}/></a>
        <ul className='nav-links-container'>
          <li className='nav-link'><a href='/home'>Home</a></li>
          <li className='nav-link'><a href='/about'>About</a></li>
          <li className='nav-link'><a href='/menu'>Menu</a></li>
          <li className='nav-link'><a href='/reservations'>Reservations</a></li>
          <li className='nav-link'><a href='/order-online'>Order Online</a></li>
          <li className='nav-link '><a href='/login'>Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav