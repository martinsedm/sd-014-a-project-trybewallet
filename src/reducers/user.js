// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'EMAIL':
    return { ...state, user: action.payload };
  default:
    return state;
  }
}

export default userReducer;
