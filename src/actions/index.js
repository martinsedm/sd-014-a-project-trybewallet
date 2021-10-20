// Coloque aqui suas actions
export const setEmail = (payload) => ({
  type: 'SET_EMAIL',
  payload,
});

export const password = (payload) => ({
  type: 'SET_PASS',
  payload,
});

const getCurrencies = (payload) => ({
  type: 'GET_CURRENCIES',
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    await delete currencies.USDT;
    dispatch(getCurrencies(Object.keys(currencies))); // Envia um array com as moedas (sem USDT)
  } catch (error) {
    console.error(error);
  }
};
