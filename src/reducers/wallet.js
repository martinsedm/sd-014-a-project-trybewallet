// import { TAKE_CURRENCIES, GET_CURRENCIES, SET_EXPENSES } from '../actions';
import { GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case TAKE_CURRENCIES:
  //   return {
  //     ...state,
  //     currencies: action.payload,
  //   };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  // case SET_EXPENSES:
  //   return {
  //     ...state,
  //     currencies: action.payload,
  //   };
  default:
    return state;
  }
};

export default walletReducer;
