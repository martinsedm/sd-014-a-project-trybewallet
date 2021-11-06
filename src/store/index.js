// Paso 1, criar o store, importando os reducers;
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
