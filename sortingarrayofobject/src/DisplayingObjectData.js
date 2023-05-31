import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function DisplayingObjectData() {
    const[show, setshow] = useState();
    const[show3, setshow3] = useState(false)
    const[arr, setarr] = useState([
        {name:"venkat",pass:"123"},
    {name:"vinay",pass:"456"}
]);
    const[obj, setobj] = useState({name:"", pass:""});
    const getinputdata = (e, arg)=>{
        if(arg=="name"){
            obj.name = e;
            console.log("haa");
        }
        else if(arg=="pass"){
            obj.pass = e
        }
        setobj({...obj})
    }
    // console.log(obj);
    const submitData = ()=>{
        
      setshow3(true)
        arr.map(ele=>{
            if(obj.name == ele.name && obj.pass == ele.pass){
                setshow("valid user")
            }
            
        })
    }
    const handleClose = () => {
        setshow3(false)
        setshow()
      };
      

    return (
        <div>
            <input type="text" onChange={(e)=>getinputdata(e.target.value, "name")}/>
            
            <input type="text" onChange={(e)=>getinputdata(e.target.value, "pass")}/>
            <button onClick={()=>{submitData()}}>submitt</button>


            <Modal show={show3} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                show == undefined ? "invalid user": "valid user"
            }  
        </Modal.Body>
        </Modal>
        </div>
        
    )
}

export default DisplayingObjectData
