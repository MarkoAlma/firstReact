import React from 'react'
import { useState } from 'react'
import { frontendFrameworks } from '../data'

const Frameworks = () => {

    const [frameworks, setFrameworks] = useState(frontendFrameworks)

  return (
    <div>
      {frameworks.map((obj, i) => 
        <div key={i}>{obj}</div>
      )}
    </div>
  )
}

export default Frameworks
