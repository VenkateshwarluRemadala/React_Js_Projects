import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetData() {
    const[data, getdata] = useState([]);
    const [name, setname] = useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            // console.log(res.data, "response");
            getdata(res.data)
        })

    },[])
    console.log(data);
    console.log(name, "venkat");
  return (
    <div>
      {/* <h1>{data[0].title}</h1> */}
      <input type="text" onChange={(e)=>{setname(e.target.value)}}/>Search

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
       {
        data.length>1 && data.filter((ele)=>{
          if(name == ""){
            return ele;
          }else if(name.length>0){
            return ele.title.toLowerCase().includes(name.toLowerCase())
            ||ele.body.toLowerCase().includes(name.toLowerCase())
            || String(ele.id).toLowerCase().includes(name.toLowerCase())
          }
        }).map((ele)=><tr>
          <td>{ele.id}</td>
          <td>{ele.title}</td>
          <td>{ele.body}</td>
        </tr>
          
        )
       }
        </tbody>
      </table>
    </div>
  )
}

export default GetData
