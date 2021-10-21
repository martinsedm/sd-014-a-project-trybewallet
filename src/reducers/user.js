import { SALVAR_LOGIN } from '../actions';

const ESTADO_INICIAL = { email: '' };

function criaUsuario(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case SALVAR_LOGIN:
    return { ...state, email: action.payload.email };

  default:
    return state;
  }
}

export default criaUsuario;
