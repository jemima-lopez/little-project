import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <a href="#" className='logo'><h1>Shop</h1></a>
        <ul className='menu'>
            <li><a href='#' className='menu-link'>Main</a></li>
            <li><a href='#' className='menu-link'>About us</a></li>
            <li><a href='#' className='menu-link'>Products</a></li>
            <li><a href='#' className='menu-link'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar