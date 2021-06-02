import { connect } from 'react-redux';

import TodoLists from 'src/components/TodoLists';

import { fetchTodoLists } from 'src/actions/todolist'



// === mapStateToProps
const mapStateToProps = (state) => ({
  todoLists: state.todolists.todoLists,
});

const mapDispatchToProps = (dispatch) => ({
  getTodoLists: () => {
    dispatch(fetchTodoLists());
    console.log(fetchTodoLists);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);