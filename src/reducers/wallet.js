import { FETCH_SUCESS, FETCH_FAIL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expense: [],
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCESS:
    return {
      ...state,
      currencies: action.payload,
      error: null,
    };
  case FETCH_FAIL:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
