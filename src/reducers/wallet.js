import {
  DELETE_EXPENSE,
  FETCH_CURRENCIES_ERROR,
  FETCH_CURRENCIES_SUCCESS,
  NEW_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};
const wallet = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case FETCH_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.payload,
      }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
