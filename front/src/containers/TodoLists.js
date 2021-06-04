import { connect } from 'react-redux';

import TodoLists from 'src/components/TodoLists';

import { deleteTodolist, fetchTodoLists } from 'src/actions/todolist'
import { fetchTasks } from 'src/actions/task'


const mapStateToProps = (state) => ({
  todoLists: state.todolists.todoLists,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getTodoLists: () => {
    dispatch(fetchTodoLists());
  },
  getTodoListId: (id) => {
    dispatch(fetchTasks(id));
  },
  onDelete: (id) => {
    dispatch(deleteTodolist(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);