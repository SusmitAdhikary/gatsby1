import React from 'react'
import { Link } from "gatsby"
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  return (
    <div className='maim-menu'>
      <ul
        style={{
          listStyle : 'none',
          display: 'flex',
        }}
      >
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/blogs">Our blogs</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="#">Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Menu;
