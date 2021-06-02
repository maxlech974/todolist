import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoLists from './todolists'

const enhancers = composeWithDevTools(
  applyMiddleware(
    todoLists
  )
);

export default enhancers;