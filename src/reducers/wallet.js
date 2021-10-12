// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = { expenses: [] };

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  case REMOVE_EXPENSE:
    return {
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
