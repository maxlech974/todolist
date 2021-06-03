import { IS_LOADING } from 'src/actions/loader';

const initialeState = {
  isLoading: false,
}

const loader = (state = initialeState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.loading,
      }
      default: return {...state};
  }
};

export default loader;