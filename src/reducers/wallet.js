// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_SUCCESS, API_EXCHANG_RATES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state, currencies: action.payload,
    };
  case API_EXCHANG_RATES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  // case FETCH_EXPENSE:
  //   return {
  //     ...state,
  //     expenses: [{
  //       ...state.expenses,
  //       exchangeRates: action.payload,
  //     }],
    // };
  default:
    return state;
  }
};

export default wallet;
