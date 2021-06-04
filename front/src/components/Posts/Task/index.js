import React from 'react';

import { Navbar, Form, InputGroup, Button} from 'react-bootstrap';
import InputField from 'src/components/Fields/input';


import 'src/components/Posts/post.scss';

const Task = ({
  name,
  username,
  changeField
}) => {
  
  return (
    <div className="create">
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
              label="Nom de la tâche"
              name='name'
              placeholder="Nom de la tâche" 
              value={name}
              onChange={changeField}
            />
        </Form>
          <Button type="submit" className="submit-button">Créer</Button>
      </Navbar>
    </div>
  )
}

export default Task;