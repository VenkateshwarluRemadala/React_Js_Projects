import React, { useState } from 'react'

function Hello() {
    const[name, setname] = useState('');
    const [status, setstatus] = useState(false);
    const getName = (e)=>{
        setstatus(false)
        setname(e.target.value);
    }
    const getdata = ()=>{
        setstatus(true);
    }
  return (
    <div>
        
      <input type="text" value={status == true ? '' : name} onChange={(e)=>{getName(e)}} />
      <button onClick={()=>{getdata()}}>postdata</button>
    </div>
  )
}

export default Hello
