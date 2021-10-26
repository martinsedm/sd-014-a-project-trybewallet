import { SET_EXPENSE, SET_CURRENCIES } from '../actions';

const initialWalletValue = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialWalletValue, { type, payload }) {
  switch (type) {
  case SET_EXPENSE:
    payload.id = state.expenses.length;
    return {
      ...state, expenses: [...state.expenses, payload],
    };
  case SET_CURRENCIES:
    return {
      ...state, currencies: Object.entries(payload.currencies.data),
    };
  default:
    return state;
  }
}
export default wallet;
