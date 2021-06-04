import React from 'react';

import { Navbar, Form, InputGroup, Button} from 'react-bootstrap';
import InputField from 'src/components/Fields/input';


import 'src/components/Posts/post.scss';

const Task = ({
  name,
  changeField,
  saveTask
}) => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveTask();
  }
  return (
    <div className="create">
      <Navbar className="justify-content-center navbar">
        <Form inline>
          <InputField
              label="Nom de la tâche"
              name='name'
              placeholder="Nom de la tâche" 
              value={name}
              onChange={changeField}
            />
          <Button type="submit" className="submit-button" onClick={handleSubmit}>Créer</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Task;