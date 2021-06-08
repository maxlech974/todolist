import React, { useEffect } from 'react'
import { Card, Container, InputGroup, FormControl } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getDate } from 'src/utils/date'



import './task.scss'


const Tasks = ({ tasksList, getTasks, finish }) => {
  const { id } = useParams();
  useEffect(() => {
    getTasks(id);
  }, [])
  const compare = (a, b) => {
    if ( a.createdAt < b.createdAt ){
      return -1;
    }
    if ( a.createdAt > b.createdAt ){
      return 1;
    }
    return 0;
  }

  console.log('hello');

  const tasksByDate = tasksList.sort(compare);
  const taskActive = [];
  const tasksDone = [];

  tasksByDate.forEach( e => {
    (e.isFinished) ? tasksDone.push(e) : taskActive.push(e)
  })

  const handleCheck = (evt) => {
    console.log(evt.target.id);
    if(evt.target.checked === true){
      finish(evt.target.id);
    }
  }
  
  return(
    <Container className="task-container">
      {taskActive.map((task)=>(
        <Card className="task" key={task.id}>
          <Card.Body>
            <InputGroup>
              <InputGroup.Checkbox aria-label="done" onChange={handleCheck} id={task.id} />
              <Card.Text className="task-tittle">
                {task.name}
              </Card.Text>
            </InputGroup>
          </Card.Body>
          <Card.Footer>{getDate(task.createdAt)}</Card.Footer>
        </Card>
        ))}
      {tasksDone.map((task)=>(
          <Card className="task__done" key={task.id}>
          <Card.Body className="task-body">
            <Card.Text className="task-tittle">
              {task.name}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="task-footer">{getDate(task.createdAt)}</Card.Footer>
        </Card>
        ))}
    </Container>
  )
}

export default Tasks;