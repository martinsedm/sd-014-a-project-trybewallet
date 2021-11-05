// Coloque aqui suas actions do usuario ao momento que o usuario clica no botão.

import fetchAPIMoeda from '../services/APIMoeda';

export const INFOR_USUARIO = 'INFOR_USUARIO';
export const VALOR_MOEDAS = 'VALOR_MOEDAS';
export const VALORAPI_SUCESSO = 'VALORAPI_SUCESSO';
export const VALORAPI_ERROR = 'VALORAPI_ERROR';
export const ADICIONAR_DESPESAS = 'ADICIONAR_DESPESAS';

export const inforUsuarioAction = (email) => ({
  type: INFOR_USUARIO,
  email,
});

export const definirValorMoedasAction = (currencies) => ({
  type: VALOR_MOEDAS,
  currencies,
});

export const definirValorMoedasAPISucessoAction = (payload) => ({
  type: VALORAPI_SUCESSO,
  payload,
});

export const definirValorMoedasAPIErrorAction = (payload) => ({
  type: VALORAPI_ERROR,
  payload,
});

export const definirValorDespesaAction = (payload) => ({
  type: ADICIONAR_DESPESAS,
  payload,
});

export const fetchAPIMoedaThunk = () => async (dispatch) => {
  try {
    const respostaAPI = await fetchAPIMoeda();
    const payload = Object.keys(respostaAPI);
    dispatch(definirValorMoedasAPISucessoAction(payload));
  } catch (error) {
    dispatch(definirValorMoedasAPIErrorAction(error));
  }
};
