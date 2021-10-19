// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCCESS, API_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case API_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default wallet;
