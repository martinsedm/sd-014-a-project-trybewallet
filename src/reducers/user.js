import { SELECT_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_USER:
    return {
      ...state,
      user: action.payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
