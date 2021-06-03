import { connect } from 'react-redux';

import TodoLists from 'src/components/TodoLists';

import { fetchTodoLists } from 'src/actions/todolist'


const mapStateToProps = (state) => ({
  todoLists: state.todolists.todoLists,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getTodoLists: () => {
    dispatch(fetchTodoLists());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);