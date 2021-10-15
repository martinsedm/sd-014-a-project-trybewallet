// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCY_SUCCESS, CURRENCY_ERROR } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    error: null,
  },
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case CURRENCY_SUCCESS:
    return {
      ...state, currencies: payload,
    };
  case CURRENCY_ERROR:
    return {
      ...state, error: payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
