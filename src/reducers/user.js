const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_USER_INFO':
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
