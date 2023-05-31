import React, { useState } from 'react'

function Crud() {
    const [array, setArray] = useState(
        [
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
         ]
    );
    const [openForm, setFormOpen] = useState(false);
    const [employeeData, setEmployyeData] = useState({name:"", age:"", phone:""});
    const [openupdateForm, setupdateform] = useState(false);
    const [updateIndex, setupdatedIndex] = useState();
    const [updateElement, setupdateElement] = useState();
    const [error, setError] = useState(false)
    // const [deleteElementIndex, setDeleteElementIndex] = useState();
    const submittEmployeeData = ()=>{
        if(employeeData.name.length<=0 || employeeData.age.length<=0|| employeeData.phone.length<=0){
            setError(true)
        }else{
            array.push(employeeData);
            setArray([...array]);
            setEmployyeData({name:"", age:"", phone:""})
            setFormOpen(false);  
            setError(false)
        }
    }
    const updateData = ()=>{
        array.splice(updateIndex,1,updateElement);
        setArray([...array]);
        setupdateElement({});
        setupdatedIndex();
        setupdateform(false);
    }
    const deleteEmployyee = (ind)=>{
        array.splice(ind,1);
        setArray([...array]);
    }
  return (
    <div>
            <table>
                <thead>
                    {
                        array.length>0?
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>phone</th>
                            <th><button onClick={()=>{
                                setFormOpen(true);
                            }}>addEmployee</button></th>
                        
                        </tr>
                        :null
                    }
                </thead>
                <tbody>
                    {
                        array.map((ele,index)=>
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.phone}</td>
                            <td><button onClick={()=>{setupdateform(true);
                             setupdatedIndex(index);
                             setupdateElement({...ele})
                            }}>updateEmployee</button></td>
                            <td><button onClick={()=>{deleteEmployyee(index)}}>deleteEmployee</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            {
                openForm == true ? 
                <div>
                    <input  type='text' style= {error == true && employeeData.name.length<=0 ? {"border":"solid red 2px"} : null} onChange={(e)=>{setEmployyeData({...employeeData, ...{name:e.target.value}})}}/><br></br>
                    <input  type='text' style= {error == true && employeeData.age.length<=0 ?{"border":"solid red 2px"} : null} onChange={(e)=>{setEmployyeData({...employeeData, ...{age:e.target.value}})}}/><br></br>
                    <input  type='text' style= {error == true && employeeData.phone.length<=0 ? {"border":"solid red 2px"} : null} onChange={(e)=>{setEmployyeData({...employeeData, ...{phone:e.target.value}})}}/><br></br>
                    <button style= {error == true && employeeData.name.length<=0 && employeeData.age.length<=0 && employeeData.phone.length<=0? {"border":"solid red 2px"} : null} onClick={submittEmployeeData}>submittData</button>
                </div>:null
            }

            {  
                openupdateForm == true ? 
                <div>
                    <input  type='text' value={updateElement.name} onChange={(e)=>{setupdateElement({...updateElement, ...{name:e.target.value}})}}/><br></br>
                    <input  type='text' value={updateElement.age}  onChange={(e)=>{setupdateElement({...updateElement, ...{age:e.target.value}})}}/><br></br>
                    <input  type='text' value={updateElement.phone}  onChange={(e)=>{setupdateElement({...updateElement, ...{phone:e.target.value}})}}/><br></br>
                    <button onClick={updateData}>submittData</button>
                </div>:null
            }

    </div>
  )
}

export default Crud
