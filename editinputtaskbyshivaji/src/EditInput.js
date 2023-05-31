import React, {useState } from 'react'

function EditInput() {
    const [name, setname] = useState("");
    const[count, setcount] = useState(0)
    const [arr, setarr] = useState([
                                        {
                                            name:"venkat",
                                            age:20
                                        }
                                    ])
    const editname= ()=>{
        setcount(1);
    }
    console.log(name);
  return (
    <div>
    {
        arr.map(ele=><input type="text" value={count === 1 ? name : ele.name} onChange = {(e)=>{editname(setname(e.target.value))}} />)
    }   
    </div>
  )
}
export default EditInput
