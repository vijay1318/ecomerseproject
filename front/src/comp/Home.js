import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'

const Home = () => {
    let [data,sedata]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
        sedata(res.data)
            
        })
    })
  return (
    <div>
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
