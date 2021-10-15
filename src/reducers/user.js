const INITIAL_STATE = [];

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_USER':
    return [...state, action.value];
  default:
    return state;
  }
}

export default user;
