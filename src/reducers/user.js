import { SET_EMAIL } from '../actions';

const INITIAL_USER = {
  email: '',
};

function userSave(state = INITIAL_USER, emailInput) {
  switch (emailInput.type) {
  case SET_EMAIL:
    return { ...state, email: emailInput.email };
  default:
    return state;
  }
}

export default userSave;
