import { GET_CURRENCIES_SUCCESS, NEW_EXPENSE, TOTAL_COST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object.entries(action.payload.currencies.data),
    };
  case NEW_EXPENSE: {
    return {
      ...state,
      expenses: [...state.expenses, {
        id: action.payload.id + state.expenses.length,
        value: action.payload.value,
        description: action.payload.description,
        currency: action.payload.currency,
        method: action.payload.method,
        tag: action.payload.tag,
        exchangeRates: action.payload.exchangeRates,
      }],
    };
  }
  case TOTAL_COST: {
    return {
      ...state,
      total: parseFloat(state.total) + parseFloat(action.payload.total),
    };
  }
  default:
    return state;
  }
}

export default wallet;
