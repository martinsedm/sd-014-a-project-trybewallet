// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_CASE } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_CASE:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
