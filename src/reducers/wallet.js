// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { QUERY_CURRENCY } from '../actions';

const initialState = {
  currencies: [],

};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case QUERY_CURRENCY:
    return [...state, action.payload];

  default:
    return state;
  }
};

export default walletReducer;
