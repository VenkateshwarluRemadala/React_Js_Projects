import React from 'react'
import { useState } from 'react'
import Childtoparent from './Childtoparent';

function Parenttochild() {
    const [count, setcount] = useState(0);
    const increment  = ()=>{
        setcount(count+1)
    }
    const Decrement  = ()=>{
        setcount(count-1)
    }
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
      {/* <Childtoparent sendData = {count}/> */}
    </div>
  )
}

export default Parenttochild
