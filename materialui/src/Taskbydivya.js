import React, { useState } from 'react'

function Taskbydivya() {
    const[obj, setobj] = useState({name:"", email:"", password:""});
    const getData = ()=>{
        setobj({...obj});
        console.log(obj, "venkat");
    }
  return (
    <div>
          <input type='text' onChange={(e)=>{setobj({...obj,...{name:e.target.value}})}}/>
            <input type='text' onChange={(e)=>{setobj({...obj,...{email:e.target.value}})}}/>
            <input type='password' onChange={(e)=>{setobj({...obj,...{password:e.target.value}})}}/>
          <button disabled = {obj.email.length>0 && obj.name.length>0 && obj.password.length>0 ? false:true} onClick={getData}>submitt</button>

      
    </div>
  )
}

export default Taskbydivya
