const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_USER_INFO':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
