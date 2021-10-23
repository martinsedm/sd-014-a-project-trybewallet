export const SALVAR_EMAIL = 'SALVAR_EMAIL';

export const salvarEmail = (emailValue) => ({
  type: SALVAR_EMAIL,
  emailValue,
});

const URL = 'https://economia.awesomeapi.com.br/json/all';
export const REQUISITAR_MOEDAS = 'REQUISITAR_MOEDAS';
export const FALHA_RESPOSTA_API = 'FALHA_RESPOSTA_API';

function requisitarMoedas(payload) {
  return {
    type: REQUISITAR_MOEDAS,
    payload,
  };
}
function falhaResposta(payload) {
  return {
    type: FALHA_RESPOSTA_API,
    payload,
  };
}

export function fetchApiMoedas() {
  return async (dispatch) => {
    try {
      const resposta = await fetch(URL);
      const data = await resposta.json();
      delete data.USDT;
      return dispatch(requisitarMoedas(data));
    } catch (error) {
      return dispatch(falhaResposta);
    }
  };
}

export const SALVAR_ESTADO_INPUT = 'SALVAR_ESTADO_INPUT';
export const salvarEstadoInput = (inputValue) => ({
  type: SALVAR_ESTADO_INPUT,
  inputValue,
});
