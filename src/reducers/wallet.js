// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE_CONSTRUCTOR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case EXPENSE_CONSTRUCTOR:
    return {
      ...state, expenses: [...state.expenses, payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
