import React, { useState } from 'react'

function ShowindAndDisablingbuttion() {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);

  return (
    <div>
        <button onClick={()=>{setfirst(!first)}}>{first ? "venkat":"firstButtion"}</button>
        <button onClick={()=>{setsecond(!second)}}>{second ? "vinay":"secondButtion"}</button>
        <button onClick={()=>{setthird(!third)}}>{third ? "raju":"thirdButtion"}</button>
      
    </div>
  )
}

export default ShowindAndDisablingbuttion
