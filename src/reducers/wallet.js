// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: '',
};

const reducerWallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case FETCH_LOADING:
    return {
      ...state,
      loading: true,
    };
  case FETCH_ERROR:
    return {
      ...state,
      error: payload,
      loading: false,
    };
  case FETCH_SUCCESS:
    return {
      ...state,
      currencies: [payload],
      loading: false,
    };
  default:
    return state;
  }
};

export default reducerWallet;
