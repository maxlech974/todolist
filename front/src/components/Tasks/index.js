import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { getDate } from 'src/utils/date'

import './task.scss'

const Tasks = ({ tasksList }) => {
  const compare = (a, b) => {
    if ( a.createdAt < b.createdAt ){
      return -1;
    }
    if ( a.createdAt > b.createdAt ){
      return 1;
    }
    return 0;
  }
  const tasksByDate = tasksList.sort(compare);
  const taskActive = [];
  const tasksDone = [];
  tasksByDate.forEach( e => {
    (e.isFinished) ? tasksDone.push(e) : taskActive.push(e)
  })

  console.log('tâches en cours', taskActive)
  
  return(
    <Container className="task-container">
      {taskActive.map((task)=>(
      <Card className="task">
        <Card.Body>
          <Card.Text className="task-tittle">
            {task.name}
          </Card.Text>
        </Card.Body>
        <Card.Footer>{getDate(task.createdAt)}</Card.Footer>
      </Card>
      ))}
    </Container>
  )
}

export default Tasks;