import { GET_CURRENCIES, NEW_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      // convertido em array para realização do map com sucesso.
      currencies: Object.keys(action.currencies),
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
  default:
    return state;
  }
};

export default wallet;
