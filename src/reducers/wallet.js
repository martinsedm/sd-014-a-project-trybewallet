import { SET_CURRENCIES, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  default:
    return state;
  }
};

export default wallet;
