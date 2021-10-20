// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    total: 0,
    error: null,
  },
};

// const WALLET_EXPENSES = 'WALLET_EXPENSES';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  // case WALLET_EXPENSES:
    // return {
    //   ...state,
    //   expenses: [...state.expenses, { id: state.expenses.length, ...payload }],
    //   total: state.total + 1 * (payload.value * rate),
    // };
  default:
    return state;
  }
}
export default wallet;
