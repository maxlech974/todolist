import React from 'react';

import { Switch, Route } from 'react-router-dom';

import TodoListPost from 'src/containers/PostTodo';
import TodoLists from 'src/containers/TodoLists';
import Tasks from 'src/components/Tasks';
import NoMatch from 'src/components/NoMatch'


const Main = () => (
  <div>
    <Switch>
      <Route path="/" exact>
        <TodoListPost />
        <TodoLists />
      </Route>
      <Route path="/todo_list/:id">
        <Tasks />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </div>
);

export default Main;