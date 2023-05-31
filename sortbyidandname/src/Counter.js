import React, { useState } from 'react'

function Counter() {
    const[obj, setobj] = useState({count:0});
    const increment = ()=>{
        obj["count"] = (obj["count"]|| 0)+2;
        setobj({...obj})
    }
    const decrement = ()=>{
        obj["count"] = (obj["count"]|| 0)-2;
        if(obj.count<=0){
            obj.count = 0
        }
        setobj({...obj})
    }
  return (
    <div>
        {
            obj.count>=0 ?<h1>{obj.count}</h1>:<h1>0</h1>
        }
         <button  onClick={increment}>Increment</button>
         <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
