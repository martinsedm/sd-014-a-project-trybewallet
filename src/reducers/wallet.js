// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_WALLET, FETCHING, ADD_CURRENCIES_OBJ, ADD_CURRENCIES_ARR } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currencyToExchange: 'BRL',
  expenses: [],
  currencies: [],
  currObj: {},
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  case FETCHING:
    return {
      ...state,
      isFetching: !state.isFetching,
    };
  case ADD_CURRENCIES_ARR:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  case ADD_CURRENCIES_OBJ:
    return {
      ...state,
      currObj: { ...state.currObj, ...action.payload },
    };
  default:
    return state;
  }
};
export default wallet;
