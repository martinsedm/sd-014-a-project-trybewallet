// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const reducerUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEND_DATA':
    return { email: action.state };
  default:
    return state;
  }
};

export default reducerUser;
