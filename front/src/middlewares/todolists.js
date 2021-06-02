import axios from 'axios'


import { FETCH_TODO_LISTS, saveTodoLists } from 'src/actions/todolist'


const todoLists = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TODO_LISTS:
      console.log('dans le middleware');
      axios.get('http://localhost:8080/api/todo_lists')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveTodoLists(response.data['hydra:member']));
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