import { ADD_EXPENSES, ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
