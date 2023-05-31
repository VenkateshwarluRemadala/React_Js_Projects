import React, { useState } from 'react'

function Parentform() {
    const [firstname, setFirstNAme] = useState();
    const [lastname, setLastName] = useState();
    const [age, setAge] = useState();
    const [array, setArray]  = useState();
    
    const setFirstNameState = (e,firstName)=>{
        if(firstName === 'firstNameInput'){
            setFirstNAme(e.target.value);
        }
        
    }
    const setLastNameState = (e, lastName)=>{
        if(lastName === 'lastNameInput'){
            setLastName(e.target.value);
        }
    }
    const setAgeState = (e, Age) =>{
        if(Age === 'ageInput'){
            setAge(e.target.value);
        }
    }
    const submit = (Buttion) =>{
        console.log("hello");
        // console.log(firstname);
        // console.log(lastname);
        // console.log(age);
        let arr = [];     
            if(firstname === undefined  || firstname === null ){
                arr.push("firstname")
            }
            if(lastname === undefined  || lastname === null){
                arr.push("lastname")
            }
            if(age === undefined || age === null){
                arr.push("age")
            }
            setArray(arr)    
    }
    console.log(array);
  return (
    <div>
      <input type= 'text' onChange = { (ele)=>{setFirstNameState(ele, 'firstNameInput')}}></input>
      {array && array.map((ele)=>(ele === 'firstname' ? <p>"firstname is required"</p>:""))}
      <input type= 'text' onChange = { (ele) => {setLastNameState(ele, 'lastNameInput')}}></input>
      {array && array.map((ele)=>(ele === 'lastname' ? <p>"lastname is required"</p>:""))}
      <input type= 'text' onChange = { (ele)=>{setAgeState(ele, 'ageInput')}}></input>
      {array && array.map((ele)=>(ele === 'age' ? <p>"age is required"</p>:""))}
      <button onClick={ (ele)=>{submit('buttion')}}>Submitt</button>
    </div>
  )
}

export default Parentform
