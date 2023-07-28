import React from 'react'
import logo from './common-assets/Logo.svg'
import './common-css/nav.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='nav-grid-system'>
      <div className='nav-container'>
        <CustomLink to='/' className='nav-link-logo'><img src={logo}/></CustomLink>
        <ul className='nav-links-container'>
          <li className='nav-link'><CustomLink to='/'>Home</CustomLink></li>
          <li className='nav-link'><CustomLink to='/about'>About</CustomLink></li>
          <li className='nav-link'><CustomLink to='/menu'>Menu</CustomLink></li>
          <li className='nav-link'><CustomLink to='/reservations'>Reservations</CustomLink></li>
          <li className='nav-link'><CustomLink to='/order'>Order Online</CustomLink></li>
          <li className='nav-link '><CustomLink to='/login'>Login</CustomLink></li>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <Link to={to} {...props}>
        {children}
      </Link>
  )
}


export default Nav
