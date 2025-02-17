import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'

const Addpro = () => {
  let [data,setdata]=useState({"name":"","price":"","image":"","description":"","category":""})
  let navigate=useNavigate()
  let obj=useContext(Ct)

  let fun=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  let fun1=(e)=>{
    setdata({...data,"image":e.target.files[0]})
  }
  useEffect(()=>{
    if(obj.state.token==""){
      navigate("/login")
    }
  },[])


let addprod=()=>{
  let fd=new FormData()
  for (let p in data){
    fd.append(p,data[p])
  }
  axios.post("http://localhost:5000/addproduct",fd).then((res)=>{
    navigate("/")
  })
}

  return (
    <div className='addmain'>
      <div className='addform'>
      <lable>Name :  <input type='text' placeholder='Enter your name' onChange={fun} name='name'/></lable>
      <lable>Price :  <input type='text' placeholder='Enter your price' onChange={fun} name='price'/></lable>
      <lable>category :  <input type='text' placeholder='Enter your category'  onChange={fun} name='category'/></lable>
       <label>drscription: <textarea onChange={fun} name='description'></textarea></label>
       <label>image: <input type='file' onChange={fun1}/></label>
        <button onClick={addprod}>Addprod</button>
        
      </div>
    </div>
  )
}

export default Addpro
