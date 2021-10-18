import { ADD_CURRENCIES, ADD_EXPENSE, DELETE_EXPENSE, EXPENSE_EDIT } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...action.payload],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...action.expenses],
    };
  case EXPENSE_EDIT:
    return ({
      ...state,
      expenses: [...action.expenses],
    });
  default:
    return state;
  }
};

export default wallet;
