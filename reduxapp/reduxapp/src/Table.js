import React from 'react'
import { useSelector } from 'react-redux'

function Table() {
    const getDataFromRedux = useSelector((state)=>{console.log(state.display.getjson, "venkateshwarlu")})
    // console.log(getDataFromRedux, "venkatesh");
  return (
    <div>
      
    </div>
  )
}

export default Table
