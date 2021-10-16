import { SET_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
