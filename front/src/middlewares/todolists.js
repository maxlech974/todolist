import axios from 'axios';


import { FETCH_TODO_LISTS, DELETE_TODOLIST, saveTodoLists, fetchTodoLists } from 'src/actions/todolist'
import { loading } from 'src/actions/loader';

import { apiTodo } from 'src/api';

const todoLists = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TODO_LISTS:
      store.dispatch(loading(true));
      axios.get(apiTodo, { withCredentials:true })
      .then((response) => {
        store.dispatch(loading(false));
        store.dispatch(
          saveTodoLists(response.data['hydra:member'])
          );    
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    case DELETE_TODOLIST:
      axios.delete(apiTodo + action.id, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchTodoLists());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
}

export default todoLists;