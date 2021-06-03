import React from 'react';

import { Navbar, Form, InputGroup, Button} from 'react-bootstrap';
import InputField from 'src/components/Fields/input';
import './todolist.scss';

const TodoList = ({name, username, changeField}) => {
  
  return (
    <div className="create-todo-list">
      <Navbar className="justify-content-center navbar">
        <Form inline>
          <InputGroup>
            <InputField
              label="Username"
              name='username'
              placeholder="Username" 
              value={username}
              onChange={changeField}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <InputField
              label="Nom de la TodoList"
              name='name'
              placeholder="Nom de la TodoList" 
              value={name}
              onChange={changeField}
            />
        </Form>
          <Button type="submit" className="submit-button">Créer</Button>
      </Navbar>
    </div>
  )
}

export default TodoList;