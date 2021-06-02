import React, { useEffect } from 'react'

import { Card, Button } from 'react-bootstrap';
import './todolists.scss';

const TodoLists = ({ getTodoLists, todoLists }) => {

  useEffect(() => {
    getTodoLists();
  }, []);
  
  console.log(todoLists);
  return(
    <div className="todo-lists-container">
      {todoLists.map((todoList) => (
        <Card className="todolist-card mb-3">
          <Card.Body className="justify-content-md-center">
            <Card.Title>{todoList.name}</Card.Title>
            <Button className="modify">Modifier</Button>
            <Button variant="danger">Supprimer</Button>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              auteur : <em>{todoList.user.username}</em>
              {/* crée le: <em>{
                new Intl.DateTimeFormat("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: 'numeric'
                }).format('2021-06-02')
              }</em> */}
            </Card.Text>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}

export default TodoLists;