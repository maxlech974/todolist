import { createStore } from 'redux'

import middlewares from 'src/middlewares'
import reducers from 'src/reducers'


const store = createStore(
  reducers,
  middlewares,
);

export default store;
