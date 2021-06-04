import { SAVE_TODO_LISTS, CREATE_TODO_LIST, RESET_TODOLIST} from 'src/actions/todolist';

const initialeState = {
  todoList: {
    name: '',
    username:'',
  },
  todoLists: [],
};

const todoLists = (state = initialeState, action ={}) => {
  switch (action.type) {
    case SAVE_TODO_LISTS:
      return {
        ...state,
        todoLists: action.todoLists
      };
    case CREATE_TODO_LIST:
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [action.name]: action.value
        }
      }
    case RESET_TODOLIST:
      return {
        initialeState,
      }
    default: return {...state};
  }
};

export default todoLists;