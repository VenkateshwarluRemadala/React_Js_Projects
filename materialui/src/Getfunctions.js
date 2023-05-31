import React from 'react'
import { useState } from 'react';

function Getfunctions(props) {
    const [obj, setobj] = useState({"count":0});
    const increaseTheCount = ()=>{
        // setcount(count+1)
          obj["count"] = (obj["count"]||0)+1
          setobj({...obj})
          props.data(obj)
      };
      const decreamentTheCount = ()=>{
        // setcount(count-1)
          obj["count"]>0? obj["count"] = (obj["count"]||0)-1 :obj["count"]=0
          setobj({...obj})
          console.log("hello");
      }
  return (
    <div>
       <button onClick={increaseTheCount}>Incremet</button>
      <button onClick={decreamentTheCount}>Decrement</button>
    </div>
  )
}

export default Getfunctions
