import { connect } from 'react-redux';

import PostTask from 'src/components/Posts/Task';

import { createTask, persistTask } from 'src/actions/task'


const mapStateToProps = (state) => ({
  name: state.task.task.name,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(createTask(value, name));
  },
  saveTask: () => {
    dispatch(persistTask());
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostTask);