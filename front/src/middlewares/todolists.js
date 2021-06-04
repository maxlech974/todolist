import axios from 'axios';


import { FETCH_TODO_LISTS, FETCH_TODO_LIST_ID, saveTodoLists } from 'src/actions/todolist'
import { loading } from 'src/actions/loader';

import { apiTodo } from 'src/api'

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

    case FETCH_TODO_LIST_ID:

    default:
      next(action);
  }
}

export default todoLists;