import React from 'react'
import { useSelector } from 'react-redux'

function GetData() {
    const data = useSelector((state)=>state.display.count)
    console.log(data,"iam getdata")
  return (
    <div>
      
    </div>
  )
}

export default GetData
