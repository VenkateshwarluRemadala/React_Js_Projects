import React, { useState } from 'react'

function ShowingData() {
    const[name, setname] = useState('');
    const[arr, setArr] = useState([])
    const submit = ()=>{
        // console.log(name, "namee");
        arr.push(name);
        console.log(arr);

        setArr([...arr]);
        // setArr(arr)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>{setname(e.target.value)}} />
        <button onClick={submit}>submitt</button>
        {
            arr.map(ele=><h1>{ele}</h1>)
        }
      
    </div>
  )
}

export default ShowingData
