import React from 'react';

import { Switch, Route } from 'react-router-dom';

import TodoListPost from 'src/containers/PostTodo';
import TodoLists from 'src/containers/TodoLists';
import Tasks from 'src/containers/Tasks';
import NoMatch from 'src/components/NoMatch'
import TaskPost from 'src/components/Posts/Task';


const Main = () => (
  <div>
    <Switch>
      <Route path="/" exact>
        <TodoListPost />
        <TodoLists />
      </Route>
      <Route path="/todo_list/:id">
        <TaskPost />
        <Tasks />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </div>
);

export default Main;