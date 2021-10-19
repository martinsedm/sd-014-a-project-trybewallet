// Coloque aqui suas actions

export const GET_EMAIL = 'GET_EMAIL';

export const COIN_LOADING = 'COIN_LOADING';
export const COIN_LOADED = 'COIN_LOADED';
export const COIN_FAILED = 'COIN_FAILED';

export const CONVERTION_SUCC = 'CONVERTION_SUCC';

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  email: payload,
});

const loadingCoins = () => ({
  type: COIN_LOADING,
});

const loadedCoins = (coins) => ({
  type: COIN_LOADED,
  coins,
});

const loadingFail = (error) => ({
  type: COIN_FAILED,
  error,
});

const convertionDone = (payload, exchangeRates) => ({
  type: CONVERTION_SUCC,
  convertion: {
    ...payload,
    exchangeRates,
  },
});

const coinApi = async () => {
  const coinAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const apiJson = await coinAPI.json();
  delete apiJson.USDT; // remove o dolar de turismo
  return apiJson;
};

export const getCoin = () => async (dispatch) => {
  dispatch(loadingCoins);
  try {
    const coinLabel = await coinApi();
    dispatch(loadedCoins(coinLabel));
  } catch (error) {
    dispatch(loadingFail(error));
  }
};

export const addExpense = (payload) => async (dispatch) => {
  dispatch(loadingCoins);
  try {
    const exchangeRates = await coinApi();
    dispatch(convertionDone(payload, exchangeRates));
  } catch (error) {
    dispatch(loadingFail(error));
  }
};
