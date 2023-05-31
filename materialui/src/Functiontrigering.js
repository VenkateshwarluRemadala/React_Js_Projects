import React, { useState } from 'react'
import Getfunctions from './Getfunctions';

function Functiontrigering() {
   const [count, setcount] = useState(0)
   
    const getData = (countProp)=>{
      setcount(countProp)

    }
    console.log(count);
  return (
    <div>
       <p>{count}</p>
     <Getfunctions data = {getData}/>
      {/* <p>{obj.count}</p> */}
     

    </div>
  )
}

export default Functiontrigering
