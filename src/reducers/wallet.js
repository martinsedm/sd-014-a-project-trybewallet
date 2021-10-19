// import { WALLET_ACTION } from '../actions/walletAction';
import { API_SUCESS } from '../actions/fetchApiAction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_SUCESS:
    return {
      ...state,
      currencies: action.payload,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
