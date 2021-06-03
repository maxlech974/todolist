import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';
import Spinner from 'src/components/Loaders/spinner'

import './todolists.scss';

const TodoLists = ({ getTodoLists, todoLists, isLoading }) => {

  useEffect(() => {
    getTodoLists();
  }, []);
    
  return(
    <div className="todo-lists-container">
      {isLoading && <Spinner />}
      {todoLists.map((todoList) => (
        <Card className="todolist-card mb-3" key={todoList.id}>
          <Card.Body className="justify-content-md-center">
            <Card.Title className="title">{todoList.name}</Card.Title>
            <div className="edition">
              <Button className="access" onClick={()=>(console.log(todoList.id))}>Ouvrir</Button>
              <Button className="modify">Modifier</Button>
              <Button variant="danger">Supprimer</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              <div>auteur : <em>{todoList.user.username}</em></div>
              <div>
                crée le :
                <em> 
                  {
                    new Intl.DateTimeFormat("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: 'numeric'
                    }).format(new Date(todoList.createdAt))
                  }
                </em>
              </div>       
            </Card.Text>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}
TodoLists.propTypes = {
  todoLists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
}

export default TodoLists;