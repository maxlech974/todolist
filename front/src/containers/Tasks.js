import { connect } from 'react-redux';

import Tasks from 'src/components/Tasks';


const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
  tasksList: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);