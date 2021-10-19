import types from '../types';

const {
  LOADING_API,
  GET_WALLET_API_SUCCESS,
  GET_WALLET_API_FAILED,
  GET_EXPENSES,
  DELETE_EXPENSE } = types;

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
  case DELETE_EXPENSE:
    console.log(action.payload);
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
