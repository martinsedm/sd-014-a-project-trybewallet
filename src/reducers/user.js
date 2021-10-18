// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_USER:
    return {
      ...state,
      user: {
        email: payload,
      },
    };

  default:
    return state;
  }
};

export default userReducer;
