import { COIN_LOADED, COIN_LOADING, COIN_FAILED, CONVERTION_SUCC } from '../actions';

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
      isLoading: true,
    };
  case COIN_LOADED:
    return {
      ...state,
      isLoading: false,
      currencies: action.coins,
    };
  case COIN_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  case CONVERTION_SUCC:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.convertion, id: state.expenses.length }],
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
