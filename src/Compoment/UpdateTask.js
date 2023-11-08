import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Add_task, Update_task } from '../redux/Action';

function  UpdateTask({element}) {
  const [task, setTask]= useState(element.task)
  const [time, setTime]= useState(element.time)
  const [iscomplet, setIscomplet]= useState(element.iscomplet)  
  const [show, setShow] = useState(false);
  const dispatch= useDispatch()  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const update=()=>{
    dispatch( Update_task(element.id,{
        
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
                defaultValue={element.task}
                onChange={(e)=>setTask(e.target.value) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Time</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                defaultValue={element.time}
                onChange={(e)=>setTime(e.target.value) }
              />
            </Form.Group>
            
             
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateTask;