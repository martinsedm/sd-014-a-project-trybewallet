// Coloque aqui suas actions.
export const USER_LOGGED = 'USER_LOGGED';
export const API_SUCCESS = 'API_SUCCESS';

export const userLogged = (email) => ({
  type: USER_LOGGED,
  payload: email,
});

export const apiSuccess = (response) => ({
  type: API_SUCCESS,
  payload: Object.keys(response).filter((currency) => currency !== 'USDT'),
});

const fetchApi = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return dispatch(apiSuccess(response));
};

export default fetchApi;
