import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './comp/Home'
import Nav from './comp/Nav'
import Login from './comp/Login'
import Reg from './comp/Reg'
import "./App.css"
import Ct from './comp/Ct'

const App = () => {
    let [state,setstate]=useState({"token":"","_id":"","name":"","pwd":""})
    let updstate=(obj)=>{
        setstate({...state,...obj})
    }
    let obj={"state":state,"updstate":updstate}
  return (
    <div>
      <BrowserRouter>
      <Ct.provider value={obj}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Reg/>}/>
      </Routes>
      </Ct.provider>
      </BrowserRouter>
    </div>
  )
}

export default App


