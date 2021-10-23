const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'RECEIVE_CURRENCIES':
    return {
      ...state,
      currencies: Object.entries(action.payload.currencies.data),
    };
  default:
    return state;
  }
}

export default wallet;
