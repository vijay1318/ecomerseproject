import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'


const Cart = () => {
  let [data,setdata]=useState([])
  let obj=useContext(Ct)
  useEffect(()=>{
    axios.get("http://localhost:5000/getcart").then((res)=>{
      setdata(res.data)
    })
  },[data])
  

  return(
    <div>
      {
        data.map((data)=>{
          return(
            <div className='cart'>
                <div className='cartimg'>
                  <img src={`http://localhost:5000/images/${data.prodimage}`} alt='abc'/>
                </div>
                <div className='subcart'>
                  <h5>{data.prodname}</h5>
                  <p>Price:{data.prodprice}</p>
                  <p>quantity:{data.prodqty}</p>
                </div>
                <div className='but'>
                  <button className='btn btn-primary'>Know more...</button>
                
                  {obj.state.token!=="" && obj.state.role==="admin"&&<button className='btn btn-info'>Edit</button>}
                  {obj.state.token!=="" && obj.state.role==="admin"&&<button className='btn btn-danger'>Delete</button>}
                  </div>
            </div>
          )
        })
      }
    </div>
  )
  
}

export default Cart
