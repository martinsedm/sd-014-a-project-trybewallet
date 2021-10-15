import { createStore } from 'redux';
// applyMiddleWare
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(reducer);

export default store;
