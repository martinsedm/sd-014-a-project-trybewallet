// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_API_ECONOMIA_SUCCESS } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case GET_API_ECONOMIA_SUCCESS:
    return {
      ...state,
      // currencies: [Object.keys(action.payload)],
      // currencies: Object.entries(action.payload).reduce((a, e) => a[e[0]] = e[1], {}),
      currencies: Object.entries(action.payload).map((e) => ({ ...e })),
    };
  default:
    return state;
  }
};

export default wallet;
