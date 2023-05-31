import axios from 'axios'
import React, { useEffect } from 'react'
import { getApidata } from './Action'
import { useDispatch } from 'react-redux'
function SendApiData() {
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
    //         console.log(data.data, "venkatesh");
    //         dispatch(getApidata(data.data))

    //     })

    // })
   const getValues = ()=>{
        const val = getApidata();
        console.log(val, "venkatesh");
        console.log("venkateshwarlu");

   }

  return (
    <div>
      <h1>api data</h1>
      <button onClick={getValues}></button>
    </div>
  )
}

export default SendApiData
