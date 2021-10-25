// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ERROR = 'ERROR';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const catchError = (error) => ({
  type: ERROR,
  error,
});

export const getThunk = () => async (dispatch) => {
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await fetchApi.json();
    // https://www.geeksforgeeks.org/javascript-remove-a-json-attribute/ - remove as opções USDT conforme pedido no requisito.
    // console.log(json);
    delete json.USDT;
    dispatch(getCurrencies(json));
  } catch (error) {
    dispatch(catchError(error));
  }
};
