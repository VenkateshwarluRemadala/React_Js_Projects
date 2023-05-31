import React, { useEffect, useLayoutEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Child(props) {
    const [empArr, setEmpArr] = useState([]);
    const [empObj, setEmpObj] = useState({name:"", age:"", phone:""});
    const [val, setval] = useState();
    const [addinput, setAddinput] = useState(["name", "age", "phone"]);
    const [showDropDown, setShowDropDown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessege, setModalMessege] = useState('');
    const [removedValArray, setRemovedValArray] = useState([])
    const [dropDownValues, setShowDropDownValues] = useState(["name", "age", "phone"]);
    useEffect(()=>{
        setval(props.rowIndex);
        console.log(props.rowIndex, "venkatesh");
        console.log(addinput, "child component");
    },[props.rowIndex]);

    const getValuesFromInput = (val, index, element)=>{
        if(element == "name"){
            setEmpObj({...empObj, ...{name:val}});
        }else if(element == "age"){
            setEmpObj({...empObj, ...{age:val}});
        }else if(element == "phone"){
            setEmpObj({...empObj, ...{phone:val}});
        }
    }
    const submitData = ()=>{
        empArr.push(empObj);
        setEmpArr([...empArr]);
        props.sendFunction(empArr,addinput);
        console.log(empArr, "venkat");
    }
    const setAddinputField = ()=>{
        setShowDropDown(true);
    }
    const getDropDownValue = (val1)=>{
      console.log(removedValArray, "hello world");
      console.log(val1, "hello world");
       for(let i of removedValArray){
         if(val1 == i && !addinput.includes(val1)){
            addinput.push(val1);
            setAddinput([...addinput])
          
            setval();
            setShowDropDown(false);
            setModalMessege("Input field is added");
            props.sendFunction(empArr, addinput)
        }else{
            setShowDropDown(false);
            setModalMessege("wrong input has been selected");
        }
       }
        setShowModal(true);
    }
    const handleClose = ()=>{
        setShowModal(false);
    }
    const sharingAddInput = (ele,index)=>{
      let val = addinput.splice(index,1);
      val = val.join('')
      removedValArray.push(val);
      setRemovedValArray([...removedValArray]);
      console.log(removedValArray,"venkatesh");
      setAddinput([...addinput]);
      props.sendFunction(empArr,addinput)

    }
  return (
    <div>
      {
        addinput.map((ele, index)=>{
            if(ele==val){
              sharingAddInput(ele,index)
            }else{
              return (
                <div>
                <input type='text' onChange={(e)=>{getValuesFromInput(e.target.value, index, ele)}}/>
             </div>
              )
            }
        }
        )
      }
      <button onClick={submitData}>SubmitData</button>
      <button onClick={setAddinputField}>AddinputField</button>
      {
        showDropDown && <select onChange={(e)=>{getDropDownValue(e.target.value)}}>
          <option>--PleaseSelect--</option>
            {
                dropDownValues.map((ele,index)=>
                <option value={ele}>{ele}</option>
                )
            }
        </select>
      }
        <Modal show={showModal} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessege}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>

      


    </div>
  )
}

export default Child
