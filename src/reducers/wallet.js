// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REMOVE_EXPENSE, SET_CURRENCIES, IS_FETCHING } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: null,
  currencyToExchange: 'BRL',
  currencies: [],
  expenses: [],

};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_FETCHING:
    return { ...state, isFetching: true };

  case SET_CURRENCIES:
    return { ...state, currencies: action.currencies, isFetching: false };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
      isFetching: false,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
}

export default wallet;
