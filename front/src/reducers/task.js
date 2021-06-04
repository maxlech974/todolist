import { FETCH_TASKS, SAVE_TASKS } from 'src/actions/task'

const initialeState = {
  idTodo: '',
  tasks: []
}


const task = (state = initialeState, action = {}) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        idTodo: action.id
      }
    case SAVE_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      }
    default: return {...state};
  }
}

export default task