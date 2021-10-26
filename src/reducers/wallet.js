// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  API_FETCH,
  API_FETCH_ERROR,
} from '../actions';

const initialWalletState = {
  currencies: [],
};

const wallet = (state = initialWalletState, { type, payload }) => {
  switch (type) {
  case API_FETCH:
    return { ...state, currencies: payload, loading: false };
  case API_FETCH_ERROR:
    return { ...state, error: payload };
  default:
    return state;
  }
};
export default wallet;
