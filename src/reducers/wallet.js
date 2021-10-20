// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_API, FETCH_ERROR_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: action.payload,
      error: null,
    };
  case FETCH_ERROR_API:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};
export default walletReducer;
