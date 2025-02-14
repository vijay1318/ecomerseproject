import axios from 'axios'
import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Login = () => {
let [data,setdata]=useState({"_id":"","pwd":""})
let [msg,setmsg]=useState("")
let obj=useContext(Ct)
let navigate=useNavigate()



let fun=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}

let login=()=>{
  axios.get("http://localhost:5000/login",data).then((res)=>{
    if(res.data.token!=undefined){
      obj.updstate(res.data)
      navigate("/")
    }
    else{
    console.log("eoor");
    
    }
  }).catch((err)=>{
console.log(err);

  })
}

  return (
    <div className='loginmain'>
      <div className='loginform'>
        <label>Email : <input type='text' value={data._id} onChange={fun} name='_id'/></label>
        <label>password : <input type='text' value={data.pwd} onChange={fun} name='pwd'/></label>

        <button onClick={login}>Login</button>
      </div>
      
    </div>
  )
}

export default Login
