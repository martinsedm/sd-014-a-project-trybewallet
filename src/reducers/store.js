import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './user';

const store = createStore(
  user,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
