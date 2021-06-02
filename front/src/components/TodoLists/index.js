import React from 'react'

import { Card, Button } from 'react-bootstrap';
import './todolists.scss';

const TodoLists = () => {
  
  
  return(
    <div className="todo-lists-container">
      <Card className="todolist-card">
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TodoLists;