import { SAVE_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVE_EMAIL:
    return {
      ...state, email: payload,
    };
  default:
    return state;
  }
};

export default userReducer;
