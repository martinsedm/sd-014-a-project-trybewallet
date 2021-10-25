// Esse reducer será responsável por tratar as informações da pessoa usuária
// import ACTIONS from '../actions';

const START_STATE = {
  email: '',
};

const loginReducer = (state = START_STATE, action) => {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
