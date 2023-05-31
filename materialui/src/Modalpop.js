import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalpop() {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  console.log(date);
  return (
    <div>
    <button onClick={handleShow}>Show popUP</button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
        <input type= "date" onChange={(e)=>{setDate(e.target.value)}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submitt
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
  )
}

export default Modalpop
