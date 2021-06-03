import { combineReducers } from 'redux'

import taskReducer from './task'
import todolistsReducer from './todolists'
import loaderReducer from './loader';

const rootreducer = combineReducers({
  task: taskReducer,
  loader: loaderReducer,
  todolists: todolistsReducer
});

export default rootreducer;