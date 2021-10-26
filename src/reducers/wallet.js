// import { GET_USER } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'GET_USER':
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default wallet;
