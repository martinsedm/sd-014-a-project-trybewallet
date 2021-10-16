// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_USER:
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
};

export default wallet;
