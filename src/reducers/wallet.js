import { ADD_EXPENSES, SET_CURRENCY, DELETE_SPEND } from '../actions';

const initialState = { expenses: [], currencies: [] };

const walletReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...payload }],
    };

  case SET_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(payload).filter((currency) => currency !== 'USDT'),
    };

  case DELETE_SPEND:
    return {
      ...state,
      expenses: state.expenses.filter((_, index) => index !== payload),
    };

  default:
    return state;
  }
};

export default walletReducer;
