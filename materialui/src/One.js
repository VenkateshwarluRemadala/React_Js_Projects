import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Two from './Two'

function One() {
    // const[data, setdata] = useState([])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
    //         // console.log(data.data, "venkat");
    //         setdata(data.data)
    //     })
    // },[])
    const getData1 = (getttingfromChild)=>{
      console.log(getttingfromChild, "parent componenet");

    }
    
  return (
    <div>
      <Two sendData = {getData1}/>
    </div>
  )
}

export default One
