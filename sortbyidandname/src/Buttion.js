import React, { useState } from 'react'
function Buttion() {
    const [obj, setObj] = useState({count:0})
//   const getData = ()=>{
//     obj["count"] = (obj["count"]||0)+1;
//     setObj({...obj})
//   }
//   console.log(obj, "venkat");
const getinputDta = (arg)=>{
    if(+arg){
        console.log(+arg, typeof +arg);
    }else if(typeof arg == "string"){
        console.log(arg, typeof arg);
    }
}
  return (
    <div>
        {/* <button onClick={getData}>{
            obj.count%2 === 0 ? "divya":"venkat"
        }</button>  */}
        <input type="text" onChange={(e)=>{getinputDta(e.target.value)}}/>
    </div>
  )
}
export default Buttion
