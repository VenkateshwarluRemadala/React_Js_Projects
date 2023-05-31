import React, { useState } from 'react'
function ReactSessions170423() {
  const [arr, setarr] = useState([1,2,3,4]);
  let name= []
  const pushValues = ()=>{
    arr.push(6);
    setarr([...arr]);
  }
  const getInputVal = (e)=>{
    name = [...name, ...[e]];
    console.log(name);
  }
  return (
    <div>
      {
       name && name.map((ele)=><p>{ele}</p>)
      };
      {/* <button onClick={pushValues}>clik here</button>  */}
      <input type='text' onChange={(value)=>{getInputVal(value.target.value)}}/>
      {/* <p>{name}</p> */}

    </div>
  )
}

export default ReactSessions170423

