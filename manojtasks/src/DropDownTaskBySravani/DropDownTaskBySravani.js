import React, { useState } from 'react'

function DropDownTaskBySravani() {
    const arrayOfObject = [
        {
            countryName:"India",
            value:"In",
            cities:[
                "hydrebad",
                "mumbai",
                "kerala"
            ]
        },
        {
            countryName:"PAK",
            value:"PK",
            cities:[
                "karachi",
                "mujafarabad",
                "majara"
            ]
        },
        {
            countryName:"BANGLADESH",
            value:"BG",
            cities:[
                "dakha",
                "nanded",
                "zxczxcxzz"
            ]
        }
    ];
    const [secondDropDown, setsecondDropDown] = useState([]);
    const [display, setDisplay] = useState(false)
   const getValues = (val)=>{
    setDisplay(true)
        for(let i of arrayOfObject){
            if(i.value == val){
                setsecondDropDown([...i.cities])
            }
        }
   }
  return (
    <div>
      <h1>DropDown</h1>
      <select onChange={(val)=>{getValues(val.target.value)}}>
       <option value="select" >---select any country---</option> 
        {
            arrayOfObject.map((ele,ind)=>
                <option value={ele.value}>{ele.countryName}</option>
            )
        }
      </select>
     {
        display == true ?  <select >
        <option value="select" >---select any country---</option> 
         {
             secondDropDown.map((ele,ind)=>
                 <option value={ele}>{ele}</option>
            )
         }
       </select>:null
     }
    </div>
  )
}
export default DropDownTaskBySravani
