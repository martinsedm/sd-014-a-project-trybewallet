import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import reducer from '../reducers';

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(reduxThunk),
  ),
);

// solução do problema de lint com a expostação da store
// https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
// export default connect(null, null)(store);
export default store;
