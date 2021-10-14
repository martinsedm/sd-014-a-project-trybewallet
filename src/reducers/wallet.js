// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  total: 0,
  currencies: [],
  error: null,
};

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
  default:
    return (state);
  }
}
