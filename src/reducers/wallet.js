// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_ITEM, DATA_CURRENCY } from '../actions';

const INITIAL_STATE = {
  id: 0,
  currenciesNames: [],
  expenses: [],
  exchangeRates: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DATA_CURRENCY:
    return {
      ...state,
      currenciesNames: Object.keys(action.payload)
        .filter((item) => item !== 'USDT'),
      exchangeRates: action.payload,
    };
  case ADD_ITEM: {
    return {
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        {
          id: state.id,
          ...action.payload,
          exchangeRates: state.exchangeRates,
        },
      ],
    };
  }
  default:
    return state;
  }
};

export default wallet;
