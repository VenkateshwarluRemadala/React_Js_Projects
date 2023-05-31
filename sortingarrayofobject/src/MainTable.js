import axios from 'axios';
import React, { useEffect } from 'react';
import {  useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function MainTable() {
    const [show, setShow] = useState(false);
    const [objs, setObjs] = useState({name:'', age:0, phone:0});
    const [obj, setobj] = useState({name:"", age:"", phone:""});
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [employee, setEmployee] = useState([]);
  
    // kminchelle
    // 0lelplR
  
    const [index, setindex] = useState();
    const [arr, setArr] = useState([
      {
        name: "venkat",
        age: 20,
        phone: 9948559416
      },
      {
        name: "vinay",
        age: 25,
        phone: 9948559400
      },
      {
        name: "kalyan",
        age: 30,
        phone: 9948559411
      }
    ]);
    useEffect(()=>{
      axios.get("http://localhost:3000/employeeData").then(res=>{
        console.log(res.data, "api response");
        setEmployee([...res.data]);
      })
    },[]);
    console.log(employee, "employee data");
    const handleClose = () => setShow(false);
    const handleShow = (obj) => {
        setShow(true);
        setObjs(obj)
    };
    const handleShow1 = () => {
      setShow1(true);
    };
    const handleClose1 = () => setShow1(false);
    const sortArray = (name) => {
      // console.log(name);
      arr.sort((a, b) => {
        return b.age - a.age;
      })
      setArr([...arr]);
    }
  
    const employeeResgistration = (e1,a)=>{
      if(a === "name"){
       objs.name = e1;
      }else if(a === "age"){
        e1 = +(e1);
       objs.age = e1;
      }else if(a === "phone"){
        e1 = +(e1)
        objs.phone = e1
      }
    }

    const postObject = ()=>{
      setObjs(objs)
      // axios.post("http://localhost:3000/employeeData",objs).then((res1)=>{
      //   console.log(res1, "posted Object");
      // })
      arr.push(objs)
     
    }
    const updateData = (obj1,ind)=>{
        setindex(ind);
        setobj({...obj1});
    }
    const deleteObj = (ind,obj1)=>{
      let arr1 = []
      arr.map((ele,index)=>{
        if(ind == index){
          
        }else{
          arr1.push(ele)
        }
        
      })
      setArr([...arr1]);
     
      // axios.delete("http://localhost:3000/employeeData",obj1).then(res=>{
      //   console.log(res.data , "deleted object");
      // })
    }
    const handleClose2 = () => {
      setShow2(false)
    };
    const updateObj = ()=>{
      console.log(obj, "venkat1");
      arr.splice(index,1,obj);
      setArr([...arr]);
    }
    return (
      <div className="App">
        <div>
        <button variant="primary1" onClick={()=>{handleShow1()}}>Add a User</button>
        <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" placeholder='Enter you name' onChange={(e)=>{employeeResgistration(e.target.value,"name")}}></input>
            <input type="number" placeholder='Enter you age' onChange={(e1)=>{employeeResgistration(e1.target.value,"age")}}></input>
            <input type="number" placeholder='Enter you phone' onChange={(e2)=>{employeeResgistration(e2.target.value,"phone")}}></input>
            <button onClick={()=>{postObject()}} >Submitt</button>
        </Modal.Body>
      </Modal>
      </div>
        <button onClick={() => { sortArray("hello") }}>sort</button>
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
              arr.map((ele,index) => <tr>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.phone}</td><button  variant="primary" onClick={()=>{handleShow(ele)}} >view</button><button onClick={()=>{updateData(ele,index)}}>update</button><button onClick={()=>{deleteObj(index,ele)}}>Delete</button>
              </tr>)
            }
          </tbody>
        </table>
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <td style={{"color":"red"}}>{objs.name}</td>
                                <td style={{"color":"orange"}}>{objs.age}</td>
                                <td style={{"color":"blue"}}>{objs.phone}</td>
                            </tr>
                </tbody>
            </table>
        </Modal.Body>
      </Modal>
      </div>
      <div>
      {/* <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" placeholder='Enter you name' value={count == 1 ? name: obj.name} onChange = {(e)=>{getUpdatingData(e.target.value,"name")}} />
            <input type="number" placeholder='Enter you age' value={count == 1 ? age: obj.age} onChange = {(e)=>{getUpdatingData(e.target.value, "age")}}/>
            <input type="number" placeholder='Enter you phone' value={count == 1 ? phone : obj.phone} onChange = {(e)=>{getUpdatingData(e.target.value, "phone")}}/>
            <button  onClick={()=>{updateObj()}}>Submitt</button>
        </Modal.Body>
      </Modal> */}

            <input type="text" placeholder='Enter you name' value={obj.name} onChange = {(e)=>setobj({...obj,name:e.target.value})} />
            <input type="number" placeholder='Enter you age' value={obj.age} onChange = {(e1)=>setobj({...obj,age:e1.target.value})}/>
            <input type="number" placeholder='Enter you phone' value={obj.phone} onChange = {(e2)=>setobj({...obj,phone:e2.target.value})}/>
            <button  onClick={()=>{updateObj()}}>Submitt</button>
        </div>
      </div>
    );
}

export default MainTable
