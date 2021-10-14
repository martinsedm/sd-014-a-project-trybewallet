// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_WALLET } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  default:
    return state;
  }
};
export default wallet;
