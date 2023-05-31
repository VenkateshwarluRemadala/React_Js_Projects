import React, { useState } from 'react'

function Modalpopup() {
    const[dropdown, setdropdown] = useState([["venkat", "vinay", "venkateshwarlu", "venkatesh", "aravind", "nagaraju", "pradeep", "none"]
    , ["venkat", "vinay", "venkateshwarlu", "venkatesh", "aravind", "nagaraju", "pradeep", "none"],
    ["venkat", "vinay", "venkateshwarlu", "venkatesh", "aravind", "nagaraju", "pradeep", "none"],
    ["venkat", "vinay", "venkateshwarlu", "venkatesh", "aravind", "nagaraju", "pradeep", "none"]
]);
const[obj, setobj] = useState({"index":"", "getDropValue":""});
const getVal = (val, val1)=>{
    obj.index = val1;
    obj.getDropValue = val.target.value;
    setobj({...obj});
    dropdown.map((ele,ind)=>{
        if(obj.getDropValue == "none" && obj.index == ind){
            dropdown.splice(ind+1,dropdown.length-ind);
            setdropdown([...dropdown])
        }else{
            setdropdown([...dropdown, ...[ele]])
        }
    })
}
  return (
    <div>
      {
        dropdown.map((ele,ind)=>
        <select onChange={(e)=>{getVal(e,ind)}}>
            {
               ele.map(ele1=>
                <option value={ele1}>{ele1}</option>
                )
            }
        </select>
        )
      }
    </div>
  )
}

export default Modalpopup
