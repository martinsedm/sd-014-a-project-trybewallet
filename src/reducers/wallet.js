import { ACTION } from '../actions';

const INICIAL_STATE = {
  func: 'a',
  func2: 'a',
};

function walletReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case ACTION:
    return {
      ...state,
    };
  default:
    return state;
  }
}
export default walletReducer;
