import { connect } from 'react-redux';

import PostTodo from 'src/components/Posts/TodoList';

import { createTodoList } from 'src/actions/todolist'


const mapStateToProps = (state) => ({
  username: state.todolists.todoList.username,
  name: state.todolists.todoList.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(createTodoList(value, name));
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTodo);