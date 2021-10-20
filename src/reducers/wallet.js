// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_WALLET_CURRENCIES, SET_WALLET_EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_CURRENCIES:
    return { ...state, currencies: action.value };
  case SET_WALLET_EXPENSES:
    return { ...state, expenses: action.value };
  default:
    return state;
  }
};

export default walletReducer;
