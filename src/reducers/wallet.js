// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { UPDATE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  default:
    return state;
  }
}

export default userReducer;
