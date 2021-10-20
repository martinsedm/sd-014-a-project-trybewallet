// Coloque aqui suas actions

export const guardaEmail = (payload) => ({
  type: 'EMAIL',
  payload,
});

export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';

export const RECEIVE_MOEDAS = 'RECEIVE_MOEDAS';

// const requestMoedas = () => ({
//   type: REQUEST_MOEDAS,
// });

const receiveMoedas = (payload) => ({
  type: RECEIVE_MOEDAS,
  payload,
});

export function fetchMoedas() {
  const URL = 'https://economia.awesomeapi.com.br/json/all';

  return async (dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();

    console.log('action', response);

    const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');

    dispatch(receiveMoedas(currencies));
  };
}
