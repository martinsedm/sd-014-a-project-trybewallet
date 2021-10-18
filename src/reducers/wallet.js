// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// https://github.com/tryber/sd-014-a-project-trybewallet/pull/5/commits/16a0f4bbfceaa125380abc18c5dd4e2ad32e68b3
// Ref citada acima.
import { WALLET, FETCHING, RECEIVE_OJB, RECEIVE_ARR } from '../actions';

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
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  case FETCHING:
    return {
      ...state,
      isFetching: !state.isFetching,
    };
  case RECEIVE_OJB:
    return {
      ...state,
      currObj: { ...state.currObj, ...action.payload },
    };
  case RECEIVE_ARR:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  default:
    return state;
  }
};
export default wallet;
