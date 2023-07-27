import React from 'react'
import './Component-css/header.css'
import hero from './icons_assets/restauranfood.jpg'
const Header = () => {
  return (
    <header className='header-grid-system'>
      <div className='header-sec-one'>
        <h1>Little Lemon</h1>
        <h2>chicago</h2>
        <p>we are a family owned Mediterranean restaurant focused on traditional recipes on traditional recipes served with a modern twist</p>
        <a role='button'>Reserve a Table</a>
      </div>
      <div className='header-sec-two'>
        <div className='header-img-container'>
          <img src={hero}/>
        </div>
      </div>
    </header>
  )
}

export default Header