import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
function DataTabale() {
const [count, setcount] = useState(0);
const [objs, setobjs] = useState({})
const [show, setShow] = useState(true);
let obj =[
    {
    "name":"venkat",
    "age": 20,
    "phone":994855,
    "domain":"ui",
    "strongAt":"javascript",
    "weakIn":"angular",
    "exp":1.6,
    "package": 3.6,
    "location": "hyd",
    "permanentAddress": "Molapatnam",
    "Mandal":"vemulapally",
    "State":"Telangana"
  },
  {
    "name":"vinay",
    "age": 22,
    "phone":9948,
    "domain":"Angular",
    "strongAt":"javascript",
    "weakIn":"angular",
    "exp":1.6,
    "package": 3.6,
    "location": "hyd",
    "permanentAddress": "kothapet",
    "Mandal":"vemulapally",
    "State":"Telangana"
  }
]
console.log(obj);
const handleClose = () => {
  setcount(0);
  setShow(false)
};
const changetData = (e2,e1)=>{
    if(e1){
      setcount(1);
        console.log(e2);
        setShow(true);
        setobjs(e1)
    }
}
console.log(objs);
  return (
    <div>
        {
          count >= 1 ?
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             
             name:<h6>{objs.name}</h6>
             age:<h6>{objs.age}</h6>
             phone:<h6>{objs.phone}</h6>
             domain:<h6>{objs.domain}</h6>
             strongAt:<h6>{objs.strongAt}</h6>
             weakIn:<h6>{objs.weakIn}</h6>
             exp:<h6>{objs.exp}</h6>
             package:<h6>{objs.package}</h6>
             location:<h6>{objs.location}</h6>
             permanentAddress:<h6>{objs.permanentAddress}</h6>phone:<h6>{}</h6>
             Mandal:<h6>{objs.Mandal}</h6>
             state:<h6>{objs.State}</h6>
          </Modal.Body>
          </Modal>    :  
          <table class = "table table-bordered ">
          <thead>  
                      <tr>  
                             <div>
                                  <th>name</th>
                                  <th>age</th>
                                  <th>phone</th>
                                  <th>domain</th>
                                  <th>strongAt</th>
                              </div>  
                      </tr>
          </thead>
          <tbody>
                      <tr>
                          {obj.map(ele2=>
                                  <div>
                                  <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.name}</td>
                                  <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.age}</td>
                                  <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.phone}</td>
                                  <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.domain}</td>
                                  <td onMouseOver={(e)=>changetData(e,ele2)}>{ele2.strongAt}</td>
                                  </div>
                                  )}
                      </tr>
          </tbody>
      </table>   
        }
       
    </div>
  )
}

export default DataTabale
