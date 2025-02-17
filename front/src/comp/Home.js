import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'

const Home = () => {
    let [data,sedata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/getproduct").then((res)=>{
        sedata(res.data)
            
        })
    },[])
  return (
    <div className='home'>
      {
        data.map((item)=>{
            return(
             
                <Card obj={item}/>
                
            )
        })
      }
    </div>
  )
}

export default Home
// https://fakestoreapi.com/products