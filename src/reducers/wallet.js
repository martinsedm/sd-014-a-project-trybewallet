// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_DISPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_DISPENSES:
    return { ...state, expenses: [...state.expenses, ...action.dispenses] };
  default:
    return state;
  }
};

export default wallet;
