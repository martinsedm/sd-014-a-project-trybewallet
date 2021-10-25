// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NOME_DO_EVENTO:
    return {
      ...state,
      chaveExemplo: action.payload.algumValor,
    };
  default:
    return state;
  }
}

export default userReducer;
