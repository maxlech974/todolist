import React from 'react';

import { Navbar, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import './todolist.scss';

const TodoList = () => {
  return (
    <div className="create-todo-list">
      <Navbar className="justify-content-center navbar">
        <Form inline>
          <InputGroup>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
          </InputGroup>
        </Form>
        <Form inline>
          <FormControl 
            type="text" 
            placeholder="Nom de la TodoList" 
            className=" mr-sm-2" 
            required
            />
        </Form>
          <Button type="submit" className="submit-button">Créer</Button>
      </Navbar>
    </div>
  )
}

export default TodoList;