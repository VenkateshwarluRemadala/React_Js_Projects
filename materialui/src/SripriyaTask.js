import React, { useState } from 'react'

function SripriyaTask() {
    const [obj, setobj] = useState({name:"", email:"", password:""})
    const [userArray, setuserArray] = useState([])
    const [display, setdisplay] = useState(false)
    const getData = ()=>{
     setdisplay({...obj})
        userArray.push(
           obj
        )
        setuserArray([...userArray]);
        setdisplay(true);
        setobj({});
    }

  return (
    <div>
      <input type='text' onChange={(e)=>{setobj({...obj,...{name:e.target.value}})}}/>
      <input type='text' onChange={(e)=>{setobj({...obj,...{email:e.target.value}})}}/>
      <input type='password' onChange={(e)=>{setobj({...obj,...{password:e.target.value}})}}/>
    <button onClick={getData}>submitt</button>
   {display == true ? 
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userArray&&userArray.map(ele=>
                            <tr>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.password}</td>
                            </tr>)
                    }

                </tbody>
            </table>
        :null
    }
   </div>
  )
}

export default SripriyaTask
