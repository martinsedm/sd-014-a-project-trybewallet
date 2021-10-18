import { SALVAR_EMAIL } from '../actions';

const ESTADO_INICIAL = {
  email: '',
};

function SalvarUsuario(state = ESTADO_INICIAL, action) {
  switch (action.type) {
  case SALVAR_EMAIL:
    return { ...state, email: action.emailValue };
  default:
    return state;
  }
}

export default SalvarUsuario;
