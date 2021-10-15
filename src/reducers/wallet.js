import { WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};
export default walletReducer;
