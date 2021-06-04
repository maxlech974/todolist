import axios from 'axios';

import { FETCH_TASKS, saveTasks, PERSIST_TASK, resetTask, fetchTasks, FINISH_TASK } from 'src/actions/task'
import { loading } from 'src/actions/loader';

import { apiTask, apiTodo } from 'src/api';

const tasks = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_TASKS:
      store.dispatch(loading(true))
      axios.get(apiTodo + action.id, { withCredentials: true})
        .then((response) => {
          store.dispatch(
            saveTasks(response.data.tasks),
            loading(false),  
          );
        })
        .catch((error) => {
          if(error.response.status === 404){
            window.location.href = '/404'
          }
        });
      next(action)
      break;
    case PERSIST_TASK:
      const {
        idTodo,
        task,
      } = store.getState().task;
      const name = String(task.name);
      const todoList = '/api/todo_lists/' + idTodo
      axios.post(apiTask,{
        name,
        todoList
      }, { withCredentials: true })
        .then(() => {
          store.dispatch(resetTask());
          store.dispatch(fetchTasks(idTodo));
        })
        .catch((error)=> {
          console.log(error)
        });
      next(action)
      break;
    case FINISH_TASK:
      console.log(action.id);
      axios.put(apiTask + '/' + action.id, {isFinished: true}, { withCredentials: true })
        .then((response) => {
          console.log(response);
          store.dispatch(fetchTasks(idTodo));
        })
        .catch((error) => {
          console.log(error)
        }) 
      next(action);
      break;
    default: 
      next(action)
  }
}

export default tasks;