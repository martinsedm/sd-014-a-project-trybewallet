// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'SET_EMAIL':
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
