import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function VinayMoreInfo(props) {
  const navigate = useNavigate();
  const vinayMoreInfo = {
    village:"molkapatnam",
    city:"miryalaguda"
  };
  const [vinayData, setVinayData] = useState({})
  useEffect(()=>{
    setVinayData({...props.data, ...vinayMoreInfo});
    
  },[]);
  return (
    <div>
      <h1>vinay</h1>
      {
        Object.values(vinayData).map((ele, index)=>
        <h1 key={index}>{ele}</h1>
        )
       }
    </div>
  )
}

export default VinayMoreInfo
