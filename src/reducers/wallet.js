import { COIN_LOADED, COIN_LOADING } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case COIN_LOADING:
    return {
      ...state,
      loadingCoins: true,
    };
  case COIN_LOADED:
    return {
      ...state,
      loadingCoins: false,
      currencies: action.coin,
    };
  default:
    return state;
  }
};

export default wallet;
