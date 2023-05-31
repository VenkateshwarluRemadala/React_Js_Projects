import React, { useState } from 'react'

function DataTabale() {
    let obj =[
        {
        "name":"venkat",
        "age": 20,
        "phone":994855,
        "domain":"ui",
        "strongAt":"javascript",
        "weakIn":"angular",
        "exp":1.6,
        "package": 3.6,
        "location": "hyd",
        "permanentAddress": "Molapatnam",
        "Mandal":"vemulapally",
        "State":"Telangana"
      },
      {
        "name":"vinay",
        "age": 22,
        "phone":9948,
        "domain":"Angular",
        "strongAt":"javascript",
        "weakIn":"angular",
        "exp":1.6,
        "package": 3.6,
        "location": "hyd",
        "permanentAddress": "kothapet",
        "Mandal":"vemulapally",
        "State":"Telangana"
      }
    ]
const [count, setcount] = useState(0);
console.log(obj);
// let count = 0;
const changetData = (e1)=>{
    if(e1.target){
        setcount(1)
        console.log(count);
    }
}
  return (
    <div>
        <table class = "table table-bordered ">
            <thead>  
                        <tr>
                            {
                                count >= 1 ?  obj.map(ele3=>Object.keys(ele3).map(ele4=><th>{ele4}</th>)) : <div >
                                    <th>name</th>
                                    <th>age</th>
                                    <th>phone</th>
                                    <th>domain</th>
                                    <th>strongAt</th>
                                </div>
                            }
                        </tr>
            </thead>
            <tbody>
                        <tr>
                        { 
                            count >= 1 ? obj.map(ele=>Object.values(ele).map(ele1=><td>{ele1}</td>)) : 
                            <div >
                            {obj.map(ele2=>
                                <div>
                                    <td onMouseOver={(e)=>changetData(e)}>{ele2.name}</td>
                                    <td onMouseOver={(e)=>changetData(e)}>{ele2.age}</td>
                                    <td onMouseOver={(e)=>changetData(e)}>{ele2.phone}</td>
                                    <td onMouseOver={(e)=>changetData(e)}>{ele2.domain}</td>
                                    <td onMouseOver={(e)=>changetData(e)}>{ele2.strongAt}</td>
                                </div>
                                    )}
                           </div>
                        }
                        </tr>
            </tbody>
        </table>      
    </div>
  )
}

export default DataTabale
