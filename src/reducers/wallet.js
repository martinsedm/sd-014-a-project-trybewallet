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
  case 'SET_TOTAL_VALUE':
    return {
      ...state,
      totalValue: Number(action.payload),
    };
  default:
    return state;
  }
}

export default wallet;
