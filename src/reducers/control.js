import {
  FETCHING,
  EDIT_MODE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  editor: false,
  currencyToExchange: 'BRL',
};

const control = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_MODE:
  {
    return { ...state, editor: !state.editor };
  }
  case FETCHING:
    return { ...state, isFetching: !state.isFetching };
  default:
    return state;
  }
};
export default control;
