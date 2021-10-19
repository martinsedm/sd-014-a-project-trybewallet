import { ADD_CURRENCIES, ADD_EXPENDITURE, DELETE_EXPENDITURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const fn = (expenses, id) => expenses.filter((expense) => expense.id !== id);

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
  case DELETE_EXPENDITURE:
    return {
      ...state,
      expenses: [
        ...fn(state.expenses, action.id),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
