// Coloque aqui suas actions
import { LOGIN } from '../reducers/user';
import { RESPONSE_API, ERROR_API, ADICIONAR_GASTOS } from '../reducers/wallet';

const login = (email, senha) => ({
  type: LOGIN,
  email,
  senha,
});

const adicionarGastos = (payload) => ({
  type: ADICIONAR_GASTOS,
  payload,
});

const fetchApi = (payload) => ({
  type: RESPONSE_API,
  payload,
});

const errorApi = (payload) => ({
  type: ERROR_API,
  payload,
});

const api = () => async (dispatch) => {
  try {
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/all');
    const respostaApi = await resposta.json();
    delete respostaApi.USDT;
    dispatch(fetchApi(respostaApi));
  } catch (ERROR) {
    return dispatch(errorApi(ERROR));
  }
};

export { api, login, adicionarGastos };
