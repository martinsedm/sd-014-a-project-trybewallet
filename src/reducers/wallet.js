// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_VALUE, GET_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_VALUE:
    return { ...state, currencies: Object.keys(action.payload) }; // precisei transformar em array pra fazer o map
  case GET_EXPENSE:
    // O id da despesa deve ser um número sequencial, começando em 0.
    return { ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  default:
    return state;
  }
};
export default reducerWallet;
