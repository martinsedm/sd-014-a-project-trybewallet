// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_EMAIL } from '../actions';

const INITIAL_USER_STATE = {
  email: '',
};

const user = (
  state = INITIAL_USER_STATE,
  action,
) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
