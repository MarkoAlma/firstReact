import React from 'react'
import { Button } from 'reactstrap'

export const Toggle = () => {

  function fut(){
    document.querySelector('.happy').classList.toggle('tunik')
    document.querySelector('.sad').classList.toggle('tunik')
  }

  return (
    <div>
      <div onClick={()=>fut()}><Button outline>Are you happy?</Button></div>
      <div style={{textAlign:'center', fontSize:'x-large'}}>
        <div className='happy'>😊</div>
        <div className='sad tunik'>😔</div>
      </div>
    </div>
  )
}
