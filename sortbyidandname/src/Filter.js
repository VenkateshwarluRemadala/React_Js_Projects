import React, { useState } from 'react'

function Filter() {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const[data, setdata] = useState(
        [
            { "id":1,"name": "John", "age": "22", "date":"20-10-2020" },
            { "id":2,"name": "PeteJr", "age": "201", "date":"20-10-2020"},
            { "id":3,"name": "Mark", "age": "23", "date":"20-10-2020"},
            { "id":1,"name": "John", "age": "22", "date":"20-10-2020" },
            { "id":1,"name": "venkaja", "age": "22", "date":"20-10-2020" },
            { "id":1,"name": "ramanjdfsdf", "age": "22", "date":"20-10-2020" },
            { "id":1,"name": "ramanjdfsdf", "age": "10", "date":"20-10-2020" }
        ]
        
    )
    console.log(typeof +name, +name);

  return (
    <div>
        {/* <input type="text" onChange={(e)=>{setage(e.target.value)}}/> */}
      <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
            {
                data.filter((ele,ind)=>{
                    if(name == ""){
                        return ele
                    }
                     else if(name.length>0){
                        for(let i in ele.name){
                            for(let j in name){
                                if(+i == +j  && ele.name[i].toLowerCase() === name[j].toLowerCase()){
                                    return ele.name
                                }
                            }
                        }       
                    }
                    
                }).map(ele=>
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                    </tr>
                    
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default Filter
