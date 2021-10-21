import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducerCombinado from '../reducers/index';

const store = createStore(
  reducerCombinado,
  composeWithDevTools(
    applyMiddleware(reduxThunk),
  ),
);

export default store;
