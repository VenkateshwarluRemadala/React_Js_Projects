import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function InputValidation() {
    const getdata = useSelector((state)=>console.log(state.dispplay, "venkateshwarlu"));
    const [obj, setobj] = useState(
        {
        name:"",
        age:"",
        phone:""
    }
    );
    const [nameError, setnameError] = useState(false);
    const [ageError, setageError] = useState(false);
    const [phoneError, setphoneError] = useState(false);
    const [error, seterror] = useState(false);
 

    const getName = (val)=>{
        setobj({...obj, ...{name:val}});
        setnameError(false)

    }
    const getAge = (val)=>{
        setobj({...obj, ...{age:val}});
        setageError(false)

    }
    const getPhone = (val)=>{
        setobj({...obj, ...{phone:val}});
        setphoneError(false);

    }
    const submittData = (e)=>{  
        if(obj.name==0 || obj.age == 0 || obj.phone == 0){
            // seterror(true);
            setageError(true);
            setnameError(true);
            setphoneError(true);
        }else{
            setobj( 
                {
                    name:"",
                    age:"",
                    phone:""
                }
            )

            // alert("data has been pisted")
            console.log("data has been pisted");
            
        }

       

    }
  return (
    <div>
       <input type='text' value={obj.name} style={obj.name.length==0 && nameError == true ? {'border':'solid red 1px'}:{'color':'black'}} onChange={(e)=>{getName(e.target.value)}}/>
        <input type='text' value={obj.age} style={obj.age.length==0 && ageError == true ? {'border':'solid red 1px'}:{'color':'black'}} onChange={(e)=>{getAge(e.target.value)}}/>
        <input type='text' value={obj.phone} style={obj.phone.length==0 && phoneError == true ? {'border':'solid red 1px'}:{'color':'black'}} onChange={(e)=>{getPhone(e.target.value)}} />
        <button  onClick={submittData}>submitt</button>
        
    </div>
  )
}

export default InputValidation
