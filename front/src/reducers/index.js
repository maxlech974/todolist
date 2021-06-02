import { combineReducers } from 'redux'

import taskReducer from './task'
import todolistsReducer from './todolists'

const rootreducer = combineReducers({
  task: taskReducer,
  todolists: todolistsReducer
});

export default rootreducer;