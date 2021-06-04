import React from 'react';

import {
  Navbar,
  Form,
  Button
} from 'react-bootstrap';

import InputField from 'src/components/Fields/input';
import 'src/components/Posts/post.scss';

const TodoList = ({
  name,
  username,
  changeField
}) => {
  
  return (
    <div className="create">
      <Navbar className="justify-content-center navbar">
        <Form inline>
          <InputField
            label="Username"
            name='username'
            placeholder="Username" 
            value={username}
            onChange={changeField}
          />
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