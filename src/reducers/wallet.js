// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state, currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
