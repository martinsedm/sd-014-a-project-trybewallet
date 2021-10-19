import { ADD_EMAIL, ADD_PASSWORD } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return { ...state, email: action.email };
  case ADD_PASSWORD:
    return { ...state, password: action.password };
  default:
    return state;
  }
}

export default user;
