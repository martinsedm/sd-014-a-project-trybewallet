// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [0],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET:
    return {
      ...state,
      currencies: [...state, action.data.currencies],
      expenses: [...state, action.data.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
