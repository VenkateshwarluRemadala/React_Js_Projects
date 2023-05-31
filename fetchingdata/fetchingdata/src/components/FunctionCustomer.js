import React, {useState,useEffect} from 'react'

function FunctionCustomer() {
    const [dogimage,setdogimage]=React.useState([]);
    useEffect(()=>{
        fetch(" http://localhost:3000/dogimages").then(response=>response.json()).then
            (data=>setdogimage(data))
    },[])
    return (
        <div>
            {dogimage.map((a)=><img src={a.url}></img>)}
        </div>
    )
}

export default FunctionCustomer
