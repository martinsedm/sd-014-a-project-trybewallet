// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FORM_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FORM_INFO:
    return ({
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.payload,
      }],
    });
  default:
    return state;
  }
};

export default wallet;
