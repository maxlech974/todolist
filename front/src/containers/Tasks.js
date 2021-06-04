import { connect } from 'react-redux';

import { fetchTasks, finishTask } from 'src/actions/task';
import Tasks from 'src/components/Tasks';


const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
  tasksList: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: (id) => {
    dispatch(fetchTasks(id));
  },
  finish: (id) => {
    dispatch(finishTask(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);