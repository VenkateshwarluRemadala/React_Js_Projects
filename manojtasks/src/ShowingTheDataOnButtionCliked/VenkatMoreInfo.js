import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function VenkatMoreInfo(props) {
  const navigate = useNavigate();
  console.log(props.data, "clicked data");
  const venkatMoreInfo = {
    village:"molkapatnam",
    city:"miryalaguda"
  };
  const [venkatData, setVenkatData] = useState({});
  const location = useLocation();
  
  useEffect(()=>{
    setVenkatData({...props.data, ...venkatMoreInfo});
    console.log(location, "use location");
    
  },[]);

  return (
    <div>
       <h1>venkat</h1>
       {
        Object.values(venkatData).map((ele, index)=>
        <h1 key={index}>{ele}</h1>
        )
       }
    </div>
  )
}

export default VenkatMoreInfo
