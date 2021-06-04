import React, { useEffect } from 'react'
import Spinner from 'src/components/Loaders/spinner'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getDate } from 'src/utils/date';


import './todolists.scss';

const TodoLists = ({ getTodoLists, getTodoListId, todoLists, isLoading, onDelete }) => {

  useEffect(() => {
    getTodoLists();
  }, []);

  return(
    <div className="todo-lists-container">
      {isLoading && <Spinner />}
      {!isLoading && (todoLists.map((todoList) => (
        <Card className="todolist-card mb-3" key={todoList.id}>
          <Card.Body className="justify-content-md-center">
            <Card.Title className="title">{todoList.name}</Card.Title>
            <div className="edition">
              <Link to={`/todo_list/${todoList.id}`}>
                <Button className="access" onClick={() => {getTodoListId(todoList.id)}}>Ouvrir</Button>
              </Link>
              <Button className="modify">Modifier</Button>
              <Button variant="danger" onClick={() => { onDelete(todoList.id) }}>Supprimer</Button>
            </div>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              <div>auteur : <em>{todoList.user.username}</em></div>
              <div>
                crée le :
                <em>
                  {getDate(todoList.createdAt)}
                </em>
              </div>       
            </Card.Text>
          </Card.Footer>
        </Card>
      )))}
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