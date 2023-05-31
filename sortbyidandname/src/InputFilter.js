import React, { useState } from 'react'

function InputFilter() {
    const [data, setData] = useState(
        [
            { "id":1,"name": "John", "age": 22, "date":"20-10-2020" },
            { "id":2,"name": "PeteJr", "age": 20, "date":"20-10-2020"},
            { "id":3,"name": "Mark", "age": 23, "date":"20-10-2020"},
            { "id":1,"name": "John", "age": 22, "date":"20-10-2020" },
            { "id":1,"name": "venkaja", "age": 22, "date":"20-10-2020" },
            { "id":1,"name": "ramanjdfsdf", "age": 22, "date":"20-10-2020" }
        ]
    )
    const [name, setname] = useState("");
  return (
    <div>
        <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
        {
            data.filter((ele,index)=>{
                if(name === ""){
                    return ele
                }else if(name.length>0){
                    return ele.name.toLowerCase().includes(name.toLowerCase()) 
                }
                
            }).map((ele)=>
           <div>
             <h1>{ele.name}</h1>
            <h1>{ele.age}</h1>
            </div>
            
            )
        }
      
    </div>
  )
}

export default InputFilter
