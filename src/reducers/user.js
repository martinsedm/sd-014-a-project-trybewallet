import { SET_USER } from '../actions';

const initialState = { email: '' };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_USER: return {
    email: payload.email,
  };
  default: return state;
  }
};

export default userReducer;
