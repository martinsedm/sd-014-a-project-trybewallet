// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CURRENCY_API_SUCCESS, CURRENCY_API_REQUEST } from '../actions';

const INITIAL_WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
  isFetching: false,
};

const walletReducer = (
  state = INITIAL_WALLET_STATE,
  action,
) => {
  switch (action.type) {
  case CURRENCY_API_SUCCESS:
    return {
      ...state,
      wallet: action.payload,
      isFetching: false,
    };
  case CURRENCY_API_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  default:
    return state;
  }
};
export default walletReducer;
