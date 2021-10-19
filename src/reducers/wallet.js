import { LOADING, SUCCESS, FAIL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, loading: !state.loading };
  case FAIL:
    return { ...state, error: action.payload };
  case SUCCESS:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default reducer;
