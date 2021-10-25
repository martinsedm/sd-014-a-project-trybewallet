import { SET_USER_DATA } from '../actions';

const INITIAL_STATE = {};

const user = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
  case SET_USER_DATA:
    return {
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
