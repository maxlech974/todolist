import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { getDate } from 'src/utils/date'

import './task.scss'

const Tasks = ({ tasksList }) => {
  return(
    <Container className="task-container">
      {tasksList.map((task)=>(
      <Card className="task">
        <Card.Body>
          <Card.Text>
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