// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  total: 0,
  currencies: [],
  error: null,
  expenses: [],
};

function convertToTotal(oldTotal, { value, currency, exchangeRates }) {
  return Math.round((oldTotal + value * exchangeRates[currency].ask) * 100) / 100;
}

export default function user(
  state = initialState, { payload, type },
) {
  switch (type) {
  case 'TOTAL':
    return ({
      ...state,
      total: payload,
    });
  case 'GET_CURRENCY_SUCKSEX':
    return ({
      ...state,
      currencies: payload,
    });
  case 'GET_CURRENCY_ERROR':
    return ({
      ...state,
      error: payload,
    });
  case 'ADD_EXPENSE':
    return ({
      ...state,
      expenses: [...state.expenses, payload],
      total: convertToTotal(state.total, payload),
    });
  default:
    return (state);
  }
}
