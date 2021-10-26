import { API_ERROR, API_SUCESS, GET_EXPENSES } from '../actions/fetchApiAction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses,
        ...action.payload,
      }],
    };
  case API_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
}

export default wallet;
