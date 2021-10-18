const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EXPENSE':
    return {
      ...state,
      expenses: action.payload,
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.payload),
    };
  case 'UPDATE_TOTAL_VALUE':
    return {
      ...state,
      totalValue: state.expenses.reduce((acc, { value, exchangeRates, currency }) => (
        acc + value * exchangeRates[currency].ask), 0),
    };
  default:
    return state;
  }
}

export default wallet;
