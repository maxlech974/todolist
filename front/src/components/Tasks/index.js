import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getDate } from 'src/utils/date'


import './task.scss'

const Tasks = ({ tasksList, getTasks }) => {
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
  const tasksByDate = tasksList.sort(compare);
  const taskActive = [];
  const tasksDone = [];
  console.log(tasksDone.length)
  tasksByDate.forEach( e => {
    (e.isFinished) ? tasksDone.push(e) : taskActive.push(e)
  })

  console.log('tâches en cours', taskActive)
  console.log('tâches terminées', tasksDone);
  
  return(
    <Container className="task-container">
      {taskActive.map((task)=>(
        <Card className="task" key={task.id}>
          <Card.Body>
            <Card.Text className="task-tittle">
              {task.name}
            </Card.Text>
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