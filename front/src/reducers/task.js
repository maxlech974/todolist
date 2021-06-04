import { FETCH_TASKS, SAVE_TASKS, CREATE_TASK, RESET_TASK } from 'src/actions/task'

const initialeState = {
  idTodo: '',
  task: {
    name: '',
  },
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
    case CREATE_TASK:
      return {
        ...state,
        task: {
          ...state.task,
          [action.name]: [action.value]
        }
      }
    case RESET_TASK:
      return{
        ...state,
        task: {
          name: '',
        }
      }
    default: return {...state};
  }
}

export default task