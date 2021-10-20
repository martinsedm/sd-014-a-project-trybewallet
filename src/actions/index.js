// Coloque aqui suas actions

export const guardaEmail = (payload) => ({
  type: 'EMAIL',
  payload,
});

export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';

export const RECEIVE_MOEDAS = 'RECEIVE_MOEDAS';

const requestMoedas = () => ({
  type: REQUEST_MOEDAS,
});

const receiveMoedas = (moedas) => ({
  type: RECEIVE_MOEDAS,
  moedas,
});

export function fetchMoedas() {
  return (dispatch) => {
    dispatch(requestMoedas());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((moedas) => dispatch(receiveMoedas(moedas)));
  };
}
