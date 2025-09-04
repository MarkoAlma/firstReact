import React from 'react'
import { Button, Spinner } from 'reactstrap'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';

export const Counter = () => {

    const [nr, setNr] =useState(0)
    const [loading, setloading] =useState(true)

    let url = `https://picsum.photos/id/${nr}`
  return (
    <div className='doboz' style={{display:'flex', gap:'10px', alignItems:'center'}}>
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
      <Button color='primary' onClick={()=> {setNr(nr-1); setloading(true)}}>
        <FaMinus />
      </Button>
      <span style={nr < 0 ? {color: 'red'} : nr > 0 ? {color: 'green'} : {color: 'black'}}>{nr}</span>
      <Button color='secondary' onClick={()=> {setNr(nr+1); setloading(true)}}>
        <FaPlus />
      </Button>
      </div>
      <div>
      <br />

      {loading && nr>0 && <Spinner></Spinner>}
      {nr > 0 && <img onLoad={()=>setloading(false)} style={{... (loading === true ? { display: "none" } : { display: "flex" }),borderRadius: '10px',boxShadow: '2px 2px 15px 2px black'}} src={`${url}/300/300`} alt="" />}
      </div>
    </div>
  )
}
