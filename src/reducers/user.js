// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {

  email: '',
  senha: '',

};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
