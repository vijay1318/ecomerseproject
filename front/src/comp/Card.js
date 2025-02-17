
import React, { useContext } from 'react'
import Ct from './Ct'

const Card = (props) => {
  let item=props.obj

  let obj=useContext(Ct)
  return (
    <div className='card'>
      <div className='cardimg'>
        <img src={`http://localhost:5000/images/${item.image}`} alt='abc'/>
      </div>
      <div className='subcard'>
        <h5>{item.title}</h5>
        <p>Price:{item.price}</p>
        <p>Category:{item._id}</p> 
      </div>
       <div className='butt'>
        <button className='btn btn-primary'>Know more...</button>
        {obj.state.token!=="" &&<button className='btn btn-info'>Add Cart</button>}
        {obj.state.token!=="" && obj.state.role==="admin"&&<button className='btn btn-info'>Edit</button>}
        {obj.state.token!=="" && obj.state.role==="admin"&&<button className='btn btn-danger'>Delete</button>}
        </div>
      
    </div>
  )
}

export default Card
