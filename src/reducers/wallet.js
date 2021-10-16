// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SET_WALLET_VALUE,
  IN_PROGRESS,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
} from '../actions';

const initialWalletState = {
  currencies: [],
  expenses: [],
  loading: true,
};

const wallet = (state = initialWalletState, { type, payload }) => {
  switch (type) {
  case SET_WALLET_VALUE:
    return { ...state, wallet: payload };
  case IN_PROGRESS:
    return { ...state, loading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: payload, loading: false };
  case GET_CURRENCIES_ERROR:
    return { ...state, error: payload };
  case ADD_EXPENSE:
    payload.id = state.expenses.length;
    return { ...state, expenses: [...state.expenses, payload] };
  default:
    return state;
  }
};

export default wallet;
