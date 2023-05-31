import React from 'react'
import { useState , useEffect} from 'react';
import Child from './Child';
function Parent() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const [data, setData] = useState([])
    const [str, setStr] = useState("venkat");
    const [str1, setStr1] = useState(undefined)

    useEffect(()=>{
        fetch(url).then((response)=>response.json()).then((json)=>{
           console.log(json); 
           setData(json);
        })
    })
  return (
    <div>
        {/* <table className='table'>
            <thead>
                <tr>
                    <th>userId</th>
                    <th> id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            {
                data.map((item)=>{
                    return(
                        <tbody>
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        
        </table>  */}
        <Child parentData = {data} />
        
    </div>
  )
}

export default Parent
