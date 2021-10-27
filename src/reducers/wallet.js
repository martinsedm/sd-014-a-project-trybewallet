import { SET_CURRENCIES, ADD_EXPENSE } from '../actions';

const INICIAL_STATE = {
  currencies: {},
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
}

export default wallet;
