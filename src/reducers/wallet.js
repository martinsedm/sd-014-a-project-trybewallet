import { TAKE_CURRENCIES, GET_CURRENCIES, SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TAKE_CURRENCIES:
    return state;
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SET_EXPENSES:
    console.log(action);
    action.payload = { id: state.expenses.length, ...action.payload };
    state.expenses = [...state.expenses, action.payload];
    return { ...state };
  default:
    return state;
  }
};
export default walletReducer;
