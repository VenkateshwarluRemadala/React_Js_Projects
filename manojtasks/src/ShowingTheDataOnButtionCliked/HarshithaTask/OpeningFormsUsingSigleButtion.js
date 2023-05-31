import React, { useState } from 'react'
function OpeningFormsUsingSigleButtion() {
    const [display, setDisplay] = useState();
  return (
    <div>
        <button onClick={()=>{
            setDisplay(true)
        }}>first Buttion</button>
        <button onClick={()=>{
            setDisplay(false)
        }}>second Buttion</button>
        {
            display == true ? <div>
                    <input type='text' value={"first name"} />
                    <input type='text' value={"first age"} />
                    <input type='text' value={"first phone"} />
                </div> : display == false ? <div>
                <input type='text' value={"second name"} />
                <input type='text' value={"second age"}/>
                <input type='text' value={"second phone"}/>
                    </div> :null
        }
      
    </div>
  )
}

export default OpeningFormsUsingSigleButtion
