import React, {useState} from 'react'

function CounterFunction() {
    const [count, setCount] = React.useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick = {()=>{setCount(count+1)}}>Increament</button>
      <button onClick = {()=>{setCount(count > 0 ? count - 1 : 0)}}>Decrement</button>
      <button onClick = {()=>{setCount(count*0)}}>Reset</button>

    </div>
  )
}

export default CounterFunction
