import React ,{useSate}from 'react'

function Statefunction() {
    const [count,setCount]=React.useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>increament</button>
            <button onClick={()=>{setCount(count*0)}}>reset</button>
        </div>
    )
}

export default Statefunction
