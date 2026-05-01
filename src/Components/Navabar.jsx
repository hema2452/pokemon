import React from 'react'
import logo from "../assets/pokemon-logo.png"
import { Link } from 'react-router-dom'


const Navabar = () => {

  return (
    <div className='nav-bar'>
      <Link to="/">
      <img src={logo} alt="logo" />
      </Link>

    </div>
  )
}

export default Navabar