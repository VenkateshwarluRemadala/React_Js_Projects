import React, { useState } from 'react'
import { Decrem, Increm } from './Redux/Action';
import { useDispatch } from 'react-redux';

function Increment() {
    const[incrementcount, setincreamentcount] = useState({count:0});
    const dispath=useDispatch()
    const increamentcountfun = ()=>{
        incrementcount["count"] = (incrementcount["count"])+1;
        setincreamentcount({...incrementcount})
        // console.log("hello");
       dispath(Increm(incrementcount))

    }
    const decreamentcountfun = ()=>{
        incrementcount["count"] = (incrementcount["count"])-1;
        setincreamentcount({...incrementcount})
        dispath(Decrem(incrementcount))
    }
  return (
    <div>
      <button onClick={increamentcountfun}>Increament</button>
      <button onClick={decreamentcountfun}>decreament</button><br></br>
     {incrementcount.count>=1 ? <p>{incrementcount.count}</p>:0}
    </div>
  )
}

export default Increment
