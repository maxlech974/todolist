import { SAVE_TODO_LISTS } from 'src/actions/todolist';

const initialeState = {
  todoLists: [],
};

const todoLists = (state = initialeState, action ={}) => {
  switch (action.type) {
    case SAVE_TODO_LISTS:
      return {
        ...state,
        todoLists: action.todoLists
      };
    default: return {...state};
  }
};

export default todoLists;