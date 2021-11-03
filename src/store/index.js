import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

export const store = createStore(
  reducer,
  composeWithDevTools(),
);

// solução do problema de lint com a expostação da store
// https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
// export default connect(null, null)(store);
export default store;
