import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
        obj.updstate({"token":"","_id":"","name":"","pwd":""})
        navigate("/login")
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
