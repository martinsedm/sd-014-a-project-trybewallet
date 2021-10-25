const initialState = {
  empty: 0,
  expenses: [],
  soma: 0,
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'WALLET_USER':
    return {
      ...state,
      empty: action.payload,
    };
  case 'ADD_EXPENSE':
    return {
      // ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  default:
    return state;
  }
};

export default wallet;
