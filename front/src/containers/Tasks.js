import { connect } from 'react-redux';

import { fetchTasks } from 'src/actions/task';
import Tasks from 'src/components/Tasks';


const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
  tasksList: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: (id) => {
    dispatch(fetchTasks(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);