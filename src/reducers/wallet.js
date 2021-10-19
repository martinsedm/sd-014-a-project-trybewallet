import { API_SUCCESS, API_FAILURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case API_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
