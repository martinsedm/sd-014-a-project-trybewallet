// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { DATA_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currenciesNames: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DATA_CURRENCY:
    return {
      ...state,
      currenciesNames: Object.keys(action.payload)
        .filter((item) => item !== 'USDT'),

    };
  default:
    return state;
  }
};

export default wallet;
