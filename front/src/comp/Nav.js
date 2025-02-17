import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
    <div className='navmain'>
      
      <Link to="/"><img src='./product.png' alt='abc' style={{"height":"20px","width":"20px"}}/></Link>
    {obj.state.token===""&& <Link to="/login">Login</Link>}
    {obj.state.token===""&& <Link to="/reg">Reg</Link>}
      
      {obj.state.token!==""&&<Link to="/cart">Cart</Link>}
      {obj.state.role==="admin"&&<Link to="/addpro">Add product</Link>}
      {obj.state.token!==""&& <Link to="/logout">Logout</Link>}

    </div>
  )
}

export default Nav
