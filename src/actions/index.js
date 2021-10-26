// Coloque aqui suas actions
export const USER_EMAIL_TYPE = 'USER_EMAIL_TYPE';
export const FETCHING = 'FETCHING';
export const API_FETCH = 'API_FETCH';
export const API_FETCH_ERROR = 'API_FETCH_ERROR';

export const fetching = () => ({
  type: FETCHING,
});

export const sendLoginInformation = (payload) => ({
  type: USER_EMAIL_TYPE,
  payload,
});

export const apiFetchSucess = (payload) => ({
  type: API_FETCH,
  payload,
});

export const apiFetchError = (payload) => ({
  type: API_FETCH_ERROR,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(fetching());
  try {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const currencies = await (await fetch(URL)).json();
    const payload = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    dispatch(apiFetchSucess(payload));
  } catch (error) {
    dispatch(apiFetchError(error));
  }
};
