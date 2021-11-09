// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions';

const initialState = {
  expenses: [],
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case DELETE_EXPENSE:
    return { ...state,
      expenses: action.value,
    };
  default:
    return state;
  }
}

export default walletReducer;
