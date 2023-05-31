import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navigating() {
    const navigate = useNavigate();
   
  return (
    <div>
        <button onClick={()=>{ navigate("/venkat")
        }}>submitssss</button>
     
    </div>
  )
}

export default Navigating
