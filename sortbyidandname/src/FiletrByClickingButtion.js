import React, { useEffect, useState } from 'react'

function FiletrByClickingButtion() {
    const [name, setname] = useState("");
    // const [age, setage] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filter, setfilter] = useState([])

    const[data, setdata] = useState(
        [
            { "id":1,"name": "John", "age": 22, "date":"20-10-2020", "taskDiscription": "I worked on javascript" },
            { "id":2,"name": "PeteJr", "age": 20, "date":"2-10-2020", "taskDiscription": "I worked on Dsa"},
            { "id":3,"name": "Mark", "age": 23, "date":"20-10-2020", "taskDiscription":"I worked on java"},
            { "id":1,"name": "venkat", "age": 22, "date":"20-5-2020", "taskDiscription": "I worked on ml" },
            { "id":1,"name": "John", "age": 22, "date":"26-4-2020","taskDiscription": "I worked on Bootstrap" },
            { "id":1,"name": "John", "age": 22, "date":"25-10-2020", "taskDiscription": "I worked on Css" },
            { "id":1,"name": "John", "age": 22, "date":"24-9-2020", "taskDiscription": "I worked on Html" },
            { "id":1,"name": "John", "age": 22, "date":"23-10-2020", "taskDiscription": "I worked on angular" },
            { "id":1,"name": "John", "age": 22, "date":"22-11-2020", "taskDiscription": "I worked on artificial intelligence" },
            { "id":1,"name": "John", "age": 22, "date":"21-10-2020", "taskDiscription": "I worked on al" }
        ]
        
    );
  
    const submitData = ()=>{
        console.log(name);
        console.log(startDate);
        console.log(endDate);
   let val = data.filter((ele,ind)=>{
            if(ele.name.toLowerCase() == name.toLowerCase() ){
                if(ele.date>=startDate.split("-")[2] && ele.date<=endDate.split('-')[2]){
                    return ele
                }
            }else if(name.length<=0){
                // return []
                 setfilter([])
            }
        });
         setfilter([...val])
}  
  return (
    <div>
        <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
        <input type="date" onChange={(e)=>{setStartDate(e.target.value)}}/>
        <input type="date" onChange={(e)=>{setEndDate(e.target.value)}}/>
        <button onClick={submitData}>Filter</button>
        
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
                        filter.map((ele)=>
                        <tr>
                            {/* <td>{ele.id}</td> */}
                            <td>{ele.name}</td>
                            <td>{ele.date}</td>
                            <td>{ele.taskDiscription}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        
      
    </div>
  )
}

export default FiletrByClickingButtion
