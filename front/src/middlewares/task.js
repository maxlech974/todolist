import axios from 'axios';

import { FETCH_TASKS, saveTasks } from 'src/actions/task'
import { loading } from 'src/actions/loader';
import NoMatch from 'src/components/NoMatch'

import { apiTodo, apiTask } from 'src/api';

const tasks = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_TASKS:
      axios.get(apiTodo + action.id, { withCredentials: true})
        .then((response) => {
          console.log(response.data.tasks);
          store.dispatch(saveTasks(response.data.tasks));
        })
        .catch((error) => {
          if(error.response.status){
            window.location.href = '/404'
          }
        });
      next(action)
      break;
    default: 
      next(action)
  }
}

export default tasks;