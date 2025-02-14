import React, { useContext, useState } from 'react'
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
    let data={"state":state,"updstate":updstate}
  return (
      <Ct.Provider value={data}>
        <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Reg/>}/>
      </Routes>
      </BrowserRouter>
      </Ct.Provider>
    
  )
}

export default App