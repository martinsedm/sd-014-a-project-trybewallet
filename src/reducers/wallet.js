// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_VALUE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_VALUE:
    return { ...state, currencies: Object.keys(action.payload) }; // precisei transformar em array pra fazer o map
  default:
    return state;
  }
};

export default reducerWallet;
