import {
  ADD_CURRENCY,
  ERROR_API,
  ADD_EXPENSES,
  AMOUNT_EXPENSES,
  COIN,
  REMOVE_EXPENSE,
} from '../actions';

const INITIALSTATE = {
  currencies: [],
  error: null,
  expenses: [],
  amount: 0,
  coins: {},

};

function walletReducer(state = INITIALSTATE, action) {
  switch (action.type) {
  case ADD_CURRENCY:
    return { ...state, currencies: action.payload.currencies };
  case ERROR_API:
    return { ...state, error: action.payload.error };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload.expenses] };
  case AMOUNT_EXPENSES:
    return { ...state, amount: action.payload.amount };
  case COIN:
    return { ...state, coins: action.payload.coins };
  default:
    return state;
  case REMOVE_EXPENSE:
    return { ...state, expenses: action.payload.remove };
  }
}
export default walletReducer;
