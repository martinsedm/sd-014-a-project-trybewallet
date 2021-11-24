import { DELETE_EXPENSE, SAVE_API, SAVE_API_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_API:
    return {
      ...state, currencies: action.currencies,
    };
  case SAVE_API_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.state.valor,
        description: action.state.descrição,
        currency: action.state.moeda,
        method: action.state.pagamento,
        tag: action.state.tag,
        exchangeRates: action.exchangeRates,
      }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.idExpense),
    };
  default:
    return {
      ...state,
    };
  }
}

export default wallet;
