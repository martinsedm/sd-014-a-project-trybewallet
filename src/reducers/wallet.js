// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const wallet = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state, currencies: payload,
    };
  case GET_CURRENCIES_ERROR:
    return state;
  default:
    return state;
  }
};

export default wallet;
