import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navmain'>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/reg">Reg</Link>

    </div>
  )
}

export default Nav
