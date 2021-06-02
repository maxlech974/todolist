import axios from 'axios'


import { FETCH_TODO_LISTS } from 'src/actions/todolist'


const todolist = (store) => (next) => (action) => {
  // switch (action.type) {
  //   case FETCH_TODO_LISTS:
  //     axios.get('http://localhost:8080/api/todo_lists')
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     next(action);
  //     break;
  //   default:
  //     next(action);
  // }
}

export default todoList;