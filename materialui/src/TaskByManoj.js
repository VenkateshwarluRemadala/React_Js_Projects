import React, { useEffect, useState } from 'react'

function TaskByManoj(props) {
    const[data, setdata] = useState(
        [
            {
                name:"venkat",
                age:20,
                phone:1122
            },
            {
                name:"kalyan",
                age:21,
                phone:3344
            },
            {
                name:"vinay",
                age:22,
                phone:5566
            }
        ]
    );
    useEffect(()=>{
        // console.log(props.sendObject,props.data, "child componenet");
        if(props.data>=0){
            console.log("hello", props.data, "vewddwf");
        }
    },[])
    const sendToParent = (object, index)=>{
        let val = data.splice(index, 1);
        setdata([...data])
        props.sendParentFun([val],index);
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    data&& data.map((ele,index)=>
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.phone}</td>
                            <td><button onClick={()=>{sendToParent(ele, index)}}>sendToParent</button></td>
                        </tr>
                        )
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default TaskByManoj
