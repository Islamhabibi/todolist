import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Add_task } from '../redux/Action';

function AddTask() {
  const [task, setTask]= useState("")
  const [time, setTime]= useState("")
  const [iscomplet, setIscomplet]= useState(false)  
  const [show, setShow] = useState(false);
  const dispatch= useDispatch()  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const add=()=>{
    dispatch(Add_task({
        id:Math.random(),
        task,
        time,
        iscomplet
    }))
  }  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>task</Form.Label>
              <Form.Control
                type="text"
                placeholder="your task"
                autoFocus
                onChange={(e)=>setTask(e.target.value) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Time</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                onChange={(e)=>setTime(e.target.value) }
              />
            </Form.Group>
            
             
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTask;