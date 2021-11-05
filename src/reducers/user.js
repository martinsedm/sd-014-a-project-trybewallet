const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_NEW_USER':
    return ({ email: action.state });
  default:
    return state;
  }
}

export default user;
