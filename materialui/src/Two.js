import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Two(props) {
    const[childData, setChildData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
            setChildData(data.data)
        })
    },[])
    const getData = ()=>{
            props.sendData(childData)
    };
   

  return (
    <div>
        {/* <table>
            <thead>
                <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.sendData.map((ele,index)=>
                        <tr>
                            <td>{ele.name}</td>
                            <td>{ele.username}</td>
                            <td>{ele.email}</td>
                        </tr>
                    )

                }
            </tbody>
        </table> */}
        <button onClick={getData}>getData</button> 
    </div>
  )
}

export default Two
