import { SET_COINS, SET_EXPENDITURE, DELETE_EXPENDITURE } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_COINS:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_EXPENDITURE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.payload,
          exchangeRates: { ...state.currencies },
        },
      ],
    };
  case DELETE_EXPENDITURE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
