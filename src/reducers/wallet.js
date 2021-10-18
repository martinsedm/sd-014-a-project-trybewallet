import { COINS, CURRENCIES, EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  coins: {},
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  case COINS:
    return {
      ...state,
      coins: action.payload.coins,
    };
  default:
    return state;
  }
};
export default walletReducer;
