import React, { useEffect, useState } from 'react'

function Parent() {
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [display, setDisplay] = useState();
    const [dis, setDis] = useState(true);
//   let disabled = true;
    const setFirstNameState = (e)=>{
      setFirstName(e.target.value);
    }
    const setLastNameState = (e)=>{
        setLastName(e.target.value);
    }
    const setPhoneState = (e)=>{
        setPhone(e.target.value);
        
    }
    const getSateteValues = ()=>{
        console.log(firstname);

    }
    
    useEffect(()=>{
        debugger;
        if(firstname && lastname  && phone ) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
        
    },[firstname, lastname, phone])
   

    function btnEnable() {
        return firstname && lastname &&phone;
    }

  return (
    <form>
      <input type='text' onChange={(ele)=>setFirstNameState(ele)}></input>
      <input type='text' onChange={(ele)=>setLastNameState(ele)}></input>
      <input type='text' onChange={(ele)=>setPhoneState(ele)}></input>
      <div >
      <button  disabled={btnEnable} onClick={()=>{getSateteValues() }} >Submitt</button>
        
        {
           dis ?  <button  disabled={display} onClick={()=>{getSateteValues() }} >Submitt</button> : null
        }
      </div>
      
      
    </form>
  )
}

export default Parent
