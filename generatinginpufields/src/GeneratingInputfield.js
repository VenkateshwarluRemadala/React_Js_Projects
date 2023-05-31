import React, { useState } from 'react'

function GeneratingInputfield() {
    const[arr, setarr] =useState([1,2,3,4,5])
  return (
    <div>
        <h1>hello</h1>
      {
        arr.map(ele=>
            // <input type="text" placeholder='hello'>{ele}</input>
            <input type="text" value={ele}/>
            // <h3>{ele}</h3>
        )
      }
      
    </div>
  )
}

export default GeneratingInputfield
