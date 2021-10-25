import { SAVE_CURRENCIES, SAVE_EXPENSE } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }] };
  default:
    return state;
  }
}

export default wallet;
