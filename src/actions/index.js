// Coloque aqui suas actions

export const GET_EMAIL = 'GET_EMAIL';

export const COIN_LOADING = 'COIN_LOADING';
export const COIN_LOADED = 'COIN_LOADED';
export const COIN_FAILED = 'COIN_FAILED';

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  email: payload,
});

const loadingCoins = () => ({
  type: COIN_LOADING,
});

const loadedCoins = (coin) => ({
  type: COIN_LOADED,
  coin,
});

const loadingFail = (error) => ({
  type: COIN_FAILED,
  error,
});

export const getCoin = () => async (dispatch) => {
  dispatch(loadingCoins);
  try {
    const coinAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinLabel = await coinAPI.json();
    delete coinLabel.USDT; // remove o dolar de turismo
    dispatch(loadedCoins(coinLabel));
  } catch (error) {
    dispatch(loadingFail(error));
  }
};
