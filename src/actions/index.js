// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_API = 'FETCH_API';
export const FETCH_ERROR_API = 'FETCH_ERROR_API';

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

const fetchApi = (payload) => ({
  type: FETCH_API,
  payload,
});

const fetchErrorApi = (payload) => ({
  type: FETCH_ERROR_API,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();
    dispatch(fetchApi(Object.keys(responseJson)));
  } catch (error) {
    dispatch(fetchErrorApi(error));
  }
};
