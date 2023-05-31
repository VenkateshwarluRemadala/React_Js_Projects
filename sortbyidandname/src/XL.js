import React from 'react'

function XL() {
    const fileUpload = (val)=>{
        console.log(val, "venkat");
    }
  return (
    <div>
        <input type="file" onChange={(e)=>{fileUpload(e.target.value)}}/>
      
    </div>
  )
}

export default XL
