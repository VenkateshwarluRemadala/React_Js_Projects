import { responsiveMap } from 'antd/lib/_util/responsiveObserve'
import React,{useState,useEffect} from 'react'
import Home from './Home'
import Employeeservice from './Employeeservice'
import axios from 'axios';
const baseurl= "http://localhost:3000/employees"
function Login() {
    const[name, setName]=React.useState("Name marchu ra")
    const[password,setPassword]=React.useState("")
    const[Employees, setEmployees]=React.useState([])
    

    useEffect(() => {axios.get(baseurl).then((response)=>{setEmployees(response.data)})
        
       
    }, [])
   function login(){
      for(let i of Employees){
          console.log(i);
      
       if(name===i.name &password===i.password){
           alert("welcome hero #venkatesh")
       }
       else{
           alert("correct ga enter chei ra erri pumka")
       }
   }
}
   function logout(){
       if(true){
           alert("pikina varaku chalu gani poo egaaaa")
           
       }
   }
    
    return (
        <div>
            <h1>Login ayinava ra gali ga #Vinay</h1><br/>
            <h1>LogIn</h1>
            <input type="text" value={name} onChange={(a)=>setName(a.target.value)}/><br/>
            <input type="password" value={password} onChange={(b)=>setPassword(b.target.value)}/><br/>
            <button onClick={login}>LogIn</button><br/>
            <button onClick={logout}>Logout</button>

        </div>
    )
}

export default Login
