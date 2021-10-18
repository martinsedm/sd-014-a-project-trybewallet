// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCESS, API_ERROR } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCESS:
    return { ...state, currencies: action.payload };
  case API_ERROR:
    return { ...state, error: true };
  default:
    return state;
  }
};

export default wallet;
