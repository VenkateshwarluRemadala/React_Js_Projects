import React, { useState } from 'react'

function ShireeshaTask() {
    const [arr, setarr] = useState([
        "hello venkat", "how are you venkat", "hello yesu", "how are you yesu", "how are you venkat","how are you ramu",
        "hello manoj", "hello ram", "hello venmana", "hello siva"
    ]);
    const [disele, setdisele] = useState(arr[0])
  return (
    <div>
      {
        arr.map((ele, ind)=>
            <button onClick={()=>{setdisele(ele)}} >{ele}</button>
        )
      }
      <p>discription: {disele}</p>
    </div>
  )
}

export default ShireeshaTask
