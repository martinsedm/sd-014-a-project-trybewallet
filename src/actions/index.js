// Coloque aqui suas actions
import getApiEconomia from '../services/economiaAPI';

export const LOG_IN = 'LOG_IN';
export const GET_API_ECONOMIA_SUCCESS = 'GET_API_ECONOMIA_SUCCESS';
export const GET_API_ECONOMIA_ERROR = 'GET_API_ECONOMIA_ERROR';
export const ADD_DEBT = 'ADD_DEBT';

// Action Creator | Adiciona usuário na chave user.email
export const emailForAction = (value) => ({
  type: LOG_IN,
  payload: value,
});

// Action Creator Sucesso Api
export const getApiSuccess = (payload) => ({
  type: GET_API_ECONOMIA_SUCCESS,
  payload,
});

// Action Creator Erro Api
export const getApiError = (payload) => ({
  type: GET_API_ECONOMIA_ERROR,
  payload,
});

// Action Creator Organiza o retorno da API
export const getApiEconomiaThunk = () => async (dispatch) => {
  try {
    const response = await getApiEconomia();
    delete response.USDT;
    dispatch(getApiSuccess(response));
  } catch (error) {
    dispatch(getApiError(error));
  }
};

// // Action Creator | Adiciona usuário na chave user.email
// export const debtForAction = (payload, response) => {
//   payload.exchangeRates = [response];
//   // const moedaUSD = Object.values(response).reduce((a, e) => a.concat(...Object.values(e)), []);
//   // const moedaUSD = Object.values(response)/* .reduce((a, e) => a.concat(...Object.values(e)), []) */;
//   const cotacao = Object.values(response).find((g) => g.code === payload.code).bid;
//   payload.bid = cotacao;
//   return {
//     type: ADD_DEBT,
//     ...{ payload, ...payload.exchangeRates, ...payload.bid,
//     },
//   };
// };

export const debtForAction = (payload, response) => {
  payload.exchangeRates = response;
  // const moedaUSD = Object.values(response).reduce((a, e) => a.concat(...Object.values(e)), []);
  // const moedaUSD = Object.values(response)/* .reduce((a, e) => a.concat(...Object.values(e)), []) */;
  // const cotacao = Object.values(response).find((g) => g.code === payload.code).bid;
  // payload.bid = cotacao;
  return {
    type: ADD_DEBT,
    ...{ payload, ...payload.exchangeRates,
    },
  };
};

export const getApiDebtThunk = (payload) => async (dispatch) => {
  try {
    const response = await getApiEconomia();
    dispatch(debtForAction(payload, response));
  } catch (error) {
    dispatch(getApiError(error));
  }
};
