import { SET_CURRENCIES } from '../actions';

const initialWalletValue = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialWalletValue, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: Object.entries(action.payload.currencies.data),
    };
  default:
    return state;
  }
}
export default wallet;
