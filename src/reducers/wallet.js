// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, REMOVE_EXPENSE, SET_CURRENCIES,
  IS_FETCHING, EDIT_EXPENSE, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
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
  case EDIT_EXPENSE:
    return { ...state, editor: true, idToEdit: action.id };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.slice(0, action.payload.id),
        action.payload,
        ...state.expenses.slice(action.payload.id + 1),
      ],
      editor: false,
      idToEdit: 0,
    };
  default:
    return state;
  }
}

export default wallet;
