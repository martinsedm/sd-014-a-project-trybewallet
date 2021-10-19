import {
  FETCHING,
  EDIT_MODE,
  CHANGE_EXCHANGE,
  ERROR,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  currencyToExchange: 'BRL',
  currencies: [],
  error: {
    status: false,
    message: '',
  },
};

const control = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_MODE:
  {
    return { ...state, editor: !state.editor };
  }
  case FETCHING:
    return { ...state, isFetching: !state.isFetching };
  case CHANGE_EXCHANGE:
    return { ...state, currencyToExchange: action.payload };
  case ERROR:
    return { ...state, error: { status: true, message: action.payload } };
  default:
    return state;
  }
};
export default control;
