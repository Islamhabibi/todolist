import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_task } from '../redux/Action'
import UpdateTask from './UpdateTask'

function Todolist() {
    const todo= useSelector((state)=>state.todo)
    console.log(todo)
    const dispatch= useDispatch() 
  return (
    <div>
        {
            todo.map(e=> e.iscomplet=== false ?
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{e.task} </Card.Title>
        <Card.Text>
          Time:  {e.time}
        </Card.Text>
        <Card.Title>{e.iscomplet} </Card.Title>
        
        <Button variant="primary" onClick={()=>dispatch(Delete_task(e.id))}>Delete</Button>
        <UpdateTask element= {e}/>     
      </Card.Body>
    </Card> : null)
        }
        
    </div>
  )
}

export default Todolist