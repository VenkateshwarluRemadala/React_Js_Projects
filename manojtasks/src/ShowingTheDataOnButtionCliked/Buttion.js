import React, { useState } from 'react'

function Buttion() {
 const [display, setdisplay] = useState(false);
 const array = [
    {
        name:"venkat",
        age:20,
        phone:1234
    },
    {
        name:"vinay",
        age:21,
        phone:5678
    },
    {
        name:"satya",
        age:22,
        phone:3978
    }
 ];
 const [namesArray, setnamesArray] = useState([]);
 const [age, setage] = useState([]);
 const displayValues = ()=>{
    if(display == true){
        for(let i of array){
            if(namesArray.indexOf(i.name) == -1){
                namesArray.push(i.name)
            }
            setnamesArray([...namesArray]);
        }
        
        console.log(namesArray);
    }else{
        for(let i of array){
            if(age.indexOf(i.age) == -1){
                age.push(i.age)
            }
        };
        setage([...age]);
        console.log(age);
    }
 }
  return (
    <div>
        <button onClick={()=>{
            setdisplay(!display);
            displayValues();
    
        }}>{display == true ? "getAges" : "getnames"}</button>
        {
            display == true?
            <table>
                <thead>
                    {
                        namesArray.length>0 ? <tr>
                        <th>name</th> 
                    </tr>:null
                    }
                </thead>
                <tbody>
                    {
                       namesArray && namesArray.map(ele=><tr>
                            <td>{ele}</td>
                        </tr>)
                    }
                </tbody>

            </table> :
            <table>
                <thead>
                {
                        age.length>0 ? <tr>
                        <th>age</th> 
                    </tr>:null
                    }
                </thead>
                <tbody>
                    {
                     age&& age.map(ele=><tr>
                            <td>{ele}</td>
                        </tr>)
                    }
                </tbody>

            </table>
        }
       
    </div>
  )
}

export default Buttion
