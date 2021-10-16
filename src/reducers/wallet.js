// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CUR, GET_CUR } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  isFetching: false,
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CUR:
    return { ...state, isFetching: true };
  case GET_CUR:
    return { ...state, currencies: action.moedas, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
