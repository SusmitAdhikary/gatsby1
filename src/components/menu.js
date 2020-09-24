import React from 'react'
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className='maim-menu'>
      <ul
        style={{
          listStyle : 'none',
          display: 'flex',
					padding: '10px'
        }}
      >
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Our Services</Link></li>
      </ul>
    </div>
  )
}

export default Menu;
