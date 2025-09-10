import React from 'react'
import { useState } from 'react'
import { FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo } from "react-icons/fa6";
import { Button } from 'reactstrap';

const Dice = () => {

    const [num, setNum] = useState(1)
    const diceComponents = {
        1:<FaDiceOne size={100}/>,
        2:<FaDiceTwo size={100}/>,
        3:<FaDiceThree size={100}/>,
        4:<FaDiceFour size={100}/>,
        5:<FaDiceFive size={100}/>,
        6:<FaDiceSix size={100}/>
    }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Dice roller</h1>
      <div>
        {diceComponents[num]}
      </div>
      <Button  onClick={()=>setNum(Math.floor(Math.random() * 6) + 1)}>Roll Dice</Button>
    </div>
  )
}

export default Dice
