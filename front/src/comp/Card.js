
import React, { useContext } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  let item=props.obj
let navigate=useNavigate()
  let obj=useContext(Ct)
  let data={"_id":"11","userid":obj.state.userid,"prodid":item._id,"prodname":item.title,"prodprice":item.price,"prodimage":item.image,"prodqty":1}

  let addcart=(item)=>{
    axios.post("http://localhost:5000/addcart",data).then((res)=>{
      let f=window.confirm('continue shopping')
        if(f){
          navigate("/cart")
        }
      })
    }
  return (
    <div className='card'>
      <div className='cardimg'>
        <img src={`http://localhost:5000/images/${item.image}`} alt='abc'/>
      </div>
      <div className='subcard'>
        <h5>{item.title}</h5>
        <p>Price:{item.price}</p>
        <p>Category:{item.category}</p> 
      </div>
       <div className='butt'>
        <button className='btn btn-primary'>Know more...</button>
        {obj.state.token!=="" &&<button className='btn btn-info' onClick={(item)=>addcart()}>Add Cart</button>}
        {obj.state.token!=="" && obj.state.role==="admin"&&<button className='btn btn-info'>Edit</button>}
        {obj.state.token!=="" && obj.state.role==="admin"&&<button className='btn btn-danger'>Delete</button>}
        </div>
      
    </div>
  )
}

export default Card
