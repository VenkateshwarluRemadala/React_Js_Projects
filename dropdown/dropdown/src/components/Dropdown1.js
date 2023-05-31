import React from 'react'
import Dropdown2 from './Dropdown2'

function Dropdown1() {
  const a=  {"plat1":["train1","train2","train3"],
    "plat2":["train11","train21","train31"],
    "plat3":["train12","train22","train32"]
     }
     const[key, setKey]=React.useState([])
     const[value, setValue]=React.useState([])
    const onchangekey=()=>{setKey(Object.keys(a))}
    function check(){
         console.log(key);
         console.log(value);
        
     }
    //  const onchangevalues=()=>{setValue(Object.values(a))}
    const onvaluechange=(val)=>setValue(Object.values(a[val]))

    return (
        <div>
            <select onChange={(f)=>onvaluechange(f.target.value)}>
                <option selected hidden disabled  >
                    ---select option---
                    </option>
                    {key.map((b)=><option>{b}</option>)}
                
            </select>
            <button onClick={onchangekey} >Keys</button>
            <button onClick={check} >Check data</button>
            {/* <button onClick={onchangevalues} >Values</button> */}
            
            
        
            <Dropdown2 value={value} onvaluechange1={onvaluechange} />
            
        </div>
    )
}

export default Dropdown1
