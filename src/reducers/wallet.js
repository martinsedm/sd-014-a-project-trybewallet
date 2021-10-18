// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// https://github.com/tryber/sd-014-a-project-trybewallet/pull/5/commits/16a0f4bbfceaa125380abc18c5dd4e2ad32e68b3
// Ref citada acima.
import { WALLET, FETCHING, RECEIVE } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  idToEdit: 0,
  currency: 'BRL',
  expenses: [],
  currencies: [],
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
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
  case RECEIVE:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  default:
    return state;
  }
};
export default wallet;
