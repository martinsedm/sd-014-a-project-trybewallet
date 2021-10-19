import { ADD_EXPENCIES, SET_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENCIES:
    return {
      ...state,
      wallet: action.payload,
    };
  case SET_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  default:
    return state;
  }
};
export default walletReducer;
