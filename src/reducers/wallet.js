// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      wallet: {
        expenses: payload, // nescesita da uma logica para trabalhar com o expenses
      },
    };

  default:
    return state;
  }
};

export default walletReducer;
