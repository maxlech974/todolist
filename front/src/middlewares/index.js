import { applyMiddleWare } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoLists from './todolists'

const enhancers = composeWithDevTools(
  applyMiddleWare(
    todoLists,
  )
);

export default enhancers;