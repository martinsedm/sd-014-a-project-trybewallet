import types from '../types';

const {
  LOADING_API,
  GET_WALLET_API_SUCCESS,
  GET_WALLET_API_FAILED,
  GET_EXPENSES } = types;

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
  case GET_EXPENSES:
    action.payload = { id: state.expenses.length, ...action.payload };
    state.expenses = [...state.expenses, action.payload];
    return { ...state };
  default:
    return state;
  }
};

export default walletReducer;
