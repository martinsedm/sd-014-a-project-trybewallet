// Coloque aqui suas actions

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrency = async () => ((await fetch(URL)).json());

export const guardaEmail = (payload) => ({
  type: 'EMAIL',
  payload,
});

export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';

export const RECEIVE_MOEDAS = 'RECEIVE_MOEDAS';

export const ADD_EXPENSES = 'ADD_EXPENSE';

const receiveMoedas = (payload) => ({
  type: RECEIVE_MOEDAS,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export function fetchMoedas() {
  return async (dispatch) => {
    const currencies = await fetchCurrency();

    const payload = Object.keys(currencies).filter((currency) => currency !== 'USDT');

    dispatch(receiveMoedas(payload));
  };
}
