import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoLists from './todolists';
import tasks from './task';

const enhancers = composeWithDevTools(
  applyMiddleware(
    todoLists,
    tasks
  )
);

export default enhancers;