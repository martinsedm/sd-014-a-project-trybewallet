import { SET_EMAIL } from '../actions';

const INITIAL_USER = {
  email: '',
};

function userSave(state = INITIAL_USER, action) {
  switch (action.type) {
  case SET_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default userSave;
