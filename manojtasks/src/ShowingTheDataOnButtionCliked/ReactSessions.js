import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ReactSessions() {
    let val =[];
    const[data, setdata] = useState([]);
    const[obj, setobj] = useState({name:"", age:"", phone:""});
    const[iteration, setiterations] = useState(["name", "age", "phone"]);
    const [address, setaddress] = useState({"place":"", "pincode":""});
    const [inputdata, setinputdata] = useState('');
    const [value, setvalue] = useState('');
    const [valuesArray, setValuesArray] = useState([])
    const formValues = (inputVal, element)=>{
        if(element == "name"){
            setobj({...obj, ...{name:inputVal}});
        }else if(element == "age"){
            setobj({...obj, ...{age:inputVal}});
        }else if(element == "phone"){
            setobj({...obj, ...{phone:inputVal}});
        }

    }
    // console.log(obj);
    const submittData = (name)=>{
        // console.log(obj);
        data.push(obj);
        setdata([...data])
    
    }
    console.log(data);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((val)=>{
            console.log(val, "vasasfs");
            setdata(val.data);
            setValuesArray([...val.data])

        })

    },[]);
    console.log(address);
    const getInputVal = (value1)=>{
       
     if(value1.length == 0){
        console.log("length 0000");
        setdata([...valuesArray])
     }else if(value1.length>0){
        console.log(value1.length, value1, "venkatesh");
        let filtered = valuesArray.filter(ele=>{
            return ele.name.toLowerCase().includes(value1.toLowerCase())
        })
         setdata([...filtered])
     }
    }
    console.log(data, "venkateshwarlu");
  return (
    <div>
      {
        iteration.map((ele,index)=>
        <div key={index}>
            <input type='text' onChange={(e)=>{formValues(e.target.value,ele)}}/>
        </div>
        )
      }
      <button onClick={()=>{submittData("venakt")}}>submittData</button>
      <input type='text' onChange={(e)=>{getInputVal(e.target.value)}}/>
      <table>
         <thead>
                <tr>
                <th>name</th>
                <th>age</th>
                <th>phone</th>
            </tr>
            
         </thead>
         <tbody>
            {
                data&&data.map((ele,index)=>
                <tr key={index}>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.phone}</td>
                </tr>
                )
            }
         </tbody>
      </table>

      {/* <input type='text' onChange={(e)=>{setaddress({...address, ...{place:e.target.value}})}}/>
      <input type='text' onChange={(e)=>{setaddress({...address, ...{pincode:e.target.value}})}}/> */}
    </div>
  )
}

export default ReactSessions
