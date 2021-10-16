// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_API = 'SAVE_API';

const saveUser = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export default saveUser;

export const apiStore = (currencies) => ({
  type: SAVE_API,
  currencies,
});

export const fetchAPI = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  dispatch(apiStore(response));
};
