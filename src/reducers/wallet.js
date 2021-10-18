import {
  CURRENCY_LOAD,
  CURRENCY_LOAD_SUCCESS,
  CURRENCY_LOAD_FAILURE,
  ADD_EXPENSE,
} from '../actions/actionTypes';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  load: true,
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_LOAD:
    return { ...state, load: false };
  case CURRENCY_LOAD_SUCCESS:
    return { ...state, currencies: action.payload, load: false };
  case CURRENCY_LOAD_FAILURE:
    return { ...state, error: action.payload, load: false };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.payload,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
