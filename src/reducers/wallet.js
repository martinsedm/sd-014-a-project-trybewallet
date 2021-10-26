const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0,
  error: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.id),
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expenses: action.payload,
    };
  case 'UPDATE_TOTAL_VALUE':
    return {
      ...state,
      totalValue: state.expenses.reduce((acc, { value, exchangeRates, currency }) => (
        acc + value * exchangeRates[currency].ask), 0),
    };
  case 'SET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'GET_ERROR':
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
