// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_WALLET, FETCHING, ADD_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currencyToExchange: 'BRL',
  expenses: [],
  currencies: [],
  // currObj: {},
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_WALLET:
  {
    const { expenses } = state;
    const id = expenses.length;
    return {
      ...state,
      expenses: [...expenses, { ...action.payload, id }],
    };
  }
  case FETCHING:
    return {
      ...state,
      isFetching: !state.isFetching,
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  default:
    return state;
  }
};
export default wallet;
