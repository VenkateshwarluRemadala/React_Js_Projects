import React, { useEffect, useState } from 'react'

function KalyanMoreInfo(props) {
  const kalyanMoreInfo = {
    village:"molkapatnam",
    city:"miryalaguda"
  };
  const [kalyanData, setKalyanData] = useState({})
  useEffect(()=>{
    setKalyanData({...props.data, ...kalyanMoreInfo});
    
  },[]);
  return (
    <div>
        <h1>kalyan</h1>
        {
        Object.values(kalyanData).map((ele, index)=>
        <h1 key={index}>{ele}</h1>
        )
       }
      
    </div>
  )
}

export default KalyanMoreInfo
