import types from '../types';

const { LOADING_API, GET_WALLET_API_SUCCESS, GET_WALLET_API_FAILED } = types;

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING_API:
    return {
      ...state,
      loading: true,
    };
  case GET_WALLET_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_WALLET_API_FAILED:
    return {
      ...state,
      error: 'xableu',
    };
  default:
    return state;
  }
};

export default walletReducer;
