// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';
export const FORM_INFO = 'FORM_INFO';
export const ERROR_API = 'ERROR_API';
export const RECIVE_API = 'RECIVE_API';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const FormInfos = (payload) => ({
  type: FORM_INFO,
  payload,
});

export const reciveApi = (payload) => ({
  type: FORM_INFO,
  payload,
});

export const errorApi = (error) => ({
  type: ERROR_API,
  error,
});

export const fetchApiRedux = (payload) => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const requestApi = await fetch(url);
  const response = await requestApi.json();
  if (!response) return dispatch(errorApi);
  dispatch(FormInfos({ exchangeRates: response, ...payload }));
};
