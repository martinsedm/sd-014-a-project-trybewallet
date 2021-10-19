import { REQUEST_CURRENCIES, GET_CURRENCIES, FAILED_REQUEST } from '../redux/actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: '',
  isFetching: false,
  response: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.json, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.error, isFetching: false };
  default:
    return state;
  }
}

export default wallet;
