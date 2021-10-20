import { actionSucess, actionReject, actionGetExpenses } from '../actions';

export async function fetchApi() {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseApi = await data.json();
  return responseApi;
}

export const fetchMoedas = () => (dispatch) => {
  const requisicao = fetchApi()
    .then((response) => {
      const result = Object.keys(response).filter((item) => item !== 'USDT');
      return dispatch(actionSucess(result));
    })
    .catch((erro) => dispatch(actionReject(erro)));
  return requisicao;
};

export const fetchExpenses = (exp) => ((dispatch) => {
  const requisicao2 = fetchApi()
    .then((resp) => dispatch(actionGetExpenses(exp, resp)))
    .catch((error) => dispatch(actionReject(error)));
  return requisicao2;
});
