import { SET_CURRENCY, SET_TOTAL } from '../actions';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
};

function userWallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case SET_CURRENCY:
    return { ...state, currencies: action.data };
  case SET_TOTAL:
    return { ...state, expenses: { ...action.expenses } };
  default:
    return state;
  }
}

export default userWallet;
