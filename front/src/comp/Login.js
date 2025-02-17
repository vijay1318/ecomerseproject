import axios from 'axios'
import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Login = () => {
let [data,setdata]=useState({"_id":"","pwd":""})
let [msg,setmsg]=useState("")
// let [res,setres]=useState({})
let obj=useContext(Ct)
let navigate=useNavigate()



let fun=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}

let login=()=>{
  axios.post("http://localhost:5000/login",data).then((res)=>{

    if(res.data.token!=undefined){
      obj.updstate(res.data)
      navigate("/")
    }
    else{
     setmsg(res.data.msg)
    
    }
  })
}

  return (
    <div className='loginmain'>
      {/* <div className='loginimg'><img src='https://tse2.mm.bing.net/th?id=OIP.buSamCN6nOQvpM9rbJGejgHaH0&pid=Api&P=0&h=180' alt='abc'/></div> */}
      <div className='loginform'>
        <div>{msg}</div>
      <label>Email : <input type='text' value={data._id} onChange={fun} name='_id' placeholder='Enter yore id'/></label>
      <label>password:<input type='text' value={data.pwd} onChange={fun} name='pwd'placeholder='Enter your passsword'/></label>

        <button onClick={login}>Login</button>
      </div>
      
    </div>
  )
}

export default Login
