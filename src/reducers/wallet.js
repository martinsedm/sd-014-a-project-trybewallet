import { SET_COINS, SET_EXPENDITURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
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
  default:
    return state;
  }
};

export default wallet;
