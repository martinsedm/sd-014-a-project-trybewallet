const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, email }) => {
  switch (type) {
  case 'USER_LOGIN':
    return { ...state, email };
  default:
    return state;
  }
};

export default user;
