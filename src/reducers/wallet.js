import { GET_ALL_COINS_SUCCESS, GET_ALL_COINS_FAIL, ADD_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_ALL_COINS_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_ALL_COINS_FAIL:
    return {
      ...state,
      error: true,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
