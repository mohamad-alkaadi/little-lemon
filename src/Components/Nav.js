import React from 'react'
import logo from './icons_assets/Logo.svg'
import './Component-css/nav.css'
const Nav = () => {
  return (
    <nav className='nav-grid-system'>
      <ul className='nav-links-container'>
        <li className='nav-link nav-link-logo'><a href='/home'><img src={logo}/></a></li>
        <li className='nav-link'><a href='/home'>Home</a></li>
        <li className='nav-link'><a href='/about'>About</a></li>
        <li className='nav-link'><a href='/menu'>Menu</a></li>
        <li className='nav-link'><a href='/reservations'>Reservations</a></li>
        <li className='nav-link'><a href='/order-online'>Order Online</a></li>
        <li className='nav-link '><a href='/login'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav