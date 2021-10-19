// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_API_ECONOMIA_ERROR, GET_API_ECONOMIA_SUCCESS, ADD_DEBT } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  error: null,
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case GET_API_ECONOMIA_SUCCESS:
    return {
      ...state,
      // currencies: [Object.keys(action.payload)],
      // currencies: Object.entries(action.payload).reduce((a, e) => a[e[0]] = e[1], {}),
      // currencies: Object.entries(action.payload).map((e) => ({ ...e })),
      // Object.entries(action.payload).reduce((a, e) => { const t = a; t[e[1].code] = { ...e[1] }; return t; }, [])
      // currencies: Object.entries(action.payload)
      //   .reduce((a, e) => { const t = a; t[e[1].code] = { ...e[1] }; return t; }, {}),
      currencies: [{ ...action.payload }],
    };
  case GET_API_ECONOMIA_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  case ADD_DEBT:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      // expenses: ['Xablau'],
    };
  default:
    return state;
  }
};

export default wallet;
