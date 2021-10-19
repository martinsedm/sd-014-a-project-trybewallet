// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER, GET_API_MONEY_SUCCESS } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case WALLET_USER:
    return { ...state, currencies: action.payload };
  case GET_API_MONEY_SUCCESS:
    return { ...state,
      currencies: action.payload.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
