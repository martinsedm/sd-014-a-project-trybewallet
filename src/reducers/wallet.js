import { ADD_CURRENCY, ERROR_API } from '../actions';

const INITIALSTATE = { currencies: [], error: null };

function walletReducer(state = INITIALSTATE, action) {
  switch (action.type) {
  case ADD_CURRENCY:
    return { ...state, currencies: action.payload.currencies };
  case ERROR_API:
    return { ...state, error: action.payload.error };
  default:
    return state;
  }
}
export default walletReducer;
