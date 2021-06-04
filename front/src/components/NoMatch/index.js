import React from 'react'

import { Jumbotron, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NoMatch = () => {

  return(
    <Container>
      <Jumbotron className="justify-content-center">
        <h1>404, Page non trouvée</h1>
        <p>
          La page que vous avez demandé n'est pas accessible.
        </p>
        <p>
          <Link to="/">
            <Button variant="primary">Retour Accueil</Button>
          </Link>
        </p>
      </Jumbotron>
    </Container>
    
  )
}


export default NoMatch;