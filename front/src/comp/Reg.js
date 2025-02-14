import {useState} from 'react'

import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Reg = () => {
  let navigate=useNavigate()
  let [data,setdata]=useState({"_id":"","name":"","phno":"","gender":"","pwd":""})
  let [msg,setmsg]=useState("")

  let adding=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  let fun=()=>{
    if(data._id!=""&&data.name!=""&&data.pwd!="")
    axios.post("http://localhost:5000/reg",data).then((res)=>{
      setmsg(res.data.msg)
      setdata({"_id":"","name":"","phno":"","gender":"","pwd":""})
      if(res.data.msg==="reg done"){
        navigate("/login")
      }    
    })
  }
  return (
    <div className='regmain'>
      <div className='regform'>
        <div>{msg}</div>
        <lable>Email :  <input type='text' placeholder='Enter your id' value={data._id} onChange={adding} name='_id'/></lable>
        <lable>Name :    <input type='text' placeholder='Enter your name' value={data.name} onChange={adding} name='name'/></lable>
        <lable>phno :    <input type='text' placeholder='Enter your phno' value={data.phno} onChange={adding} name='phno'/></lable>
        <lable>Gender :  <input type='radio'  value="male" onChange={adding} name='gender' checked={data.gender=="male"} style={{"margin":"10px"}}/>Male
        <input type='radio'  value="female" onChange={adding} name='gender' checked={data.gender=="female"} style={{"margin":"10px"}}/>Female
        </lable>
        <lable>password :  <input type='text' placeholder='Enter your Password' value={data.pwd} onChange={adding} name='pwd'/></lable>

        <button className='regbut' onClick={fun}>Add</button>
      </div>
    </div>
  )
}

export default Reg
