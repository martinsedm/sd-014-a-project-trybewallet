import { SET_WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET_DATA:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
