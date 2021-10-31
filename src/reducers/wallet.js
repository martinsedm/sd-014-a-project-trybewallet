// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas no estado do usuario.

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'INFOR_USUARIO':
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default wallet;
