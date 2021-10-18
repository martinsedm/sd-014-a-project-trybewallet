import { ADD_CURRENCIES, ADD_EXPENDITURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
    };
  case ADD_EXPENDITURE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          ...action.details,
        },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
