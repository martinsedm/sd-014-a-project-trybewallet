import { GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      // convertido em array para realização do map com sucesso.
      currencies: Object.keys(action.currencies),
    };
  default:
    return state;
  }
};

export default wallet;
