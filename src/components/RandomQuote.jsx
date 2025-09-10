import React from 'react'
import { Button } from 'reactstrap'
import { quotesFromDatabase } from '../data'
import { useState } from 'react'

const RandomQuote = () => {

    const [adat, setAdat] = useState(quotesFromDatabase)
    const futtat = () => {
        document.querySelector(".lap").innerHTML = adat[Math.floor(Math.random() * adat.length)]
    }

  return (
    <>
      <Button onClick={()=>futtat()}>New Quote</Button>
    <div>
      <div className='lap'></div>
    </div>
    </>
  )
}

export default RandomQuote
