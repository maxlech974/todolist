import React from 'react';

import { Switch, Route } from 'react-router-dom';

import TodoListPost from 'src/containers/PostTodo';
import TodoLists from 'src/containers/TodoLists';


const Main = () => (
  <div>
    <Switch>
      <Route path="/" exact>
        <TodoListPost />
        <TodoLists />
      </Route>
    </Switch>
  </div>
);

export default Main;