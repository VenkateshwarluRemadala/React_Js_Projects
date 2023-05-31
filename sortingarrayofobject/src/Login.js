import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login(props) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [show, setshow] = useState(false);
    const [show1, setShow1] = useState();
     const [show2, setshow2] = useState()
    let [change, setChange] = useState(true)
    let [arr, setArr] = useState(null)
    useEffect(()=>{

    },[setShow1])
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // setShow(true)        // setShow1(true)        e.preventDefault()
        const obj1 = {
            username: username,
            password: password
        }
        axios.post("https://dummyjson.com/auth/login", obj1).then((res) => {
            console.log(res);
            // setShow(true);
            // console.log("gell");
            if(res.status == 200){
                //console.log(show1);
                setshow(true)
                setShow1("valid user");
            }
            // console.error();
        
        }, (error)=>{
            console.log(error);
            setshow(true)
            setShow1("invalid");

        })
        // setTimeout(()=>{
        //     if(show1 == undefined){
        //         setshow(true)
        //     }
        // },2000)    
        console.log("hello");       
    }

    const handleClose = () => {
        setshow(false);
        setShow1()
    }

    return (
        <div className="body1">
            <Form className="forming" style={{ marginTop: "180px" }} align={"center"}>                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >                    <Form.Label column sm="4">                        User Name                    </Form.Label>                    <Col sm="4">                        <Form.Control type="text" placeholder="username" value={username}
                onChange={(e) => setUsername(e.target.value)}
            />                    </Col>                </Form.Group>                <Form.Group as={Row} className="mb-3" >                    <Form.Label column sm="4">          Password                    </Form.Label>        <Col sm="4">                        <Form.Control type="password" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
            />                    </Col>                </Form.Group>                <Form.Group as={Row} className="mb-3" >                    <Col sm="12">                        <button onClick={handleSubmit}>submit</button>                    </Col>                </Form.Group>            </Form>        


                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                show1 != undefined  ? show1  : null
            }
            
        </Modal.Body>
      </Modal>                                                       
        </div>)
}
export default Login


