// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const FETCHING = 'FETCHING';
export const RECEIVE_OJB = 'RECEIVE_OBJ';
export const RECEIVE_ARR = 'RECEIVE_ARR';

const NUM_CHARS = 3;

export const loginAction = (user) => ({
  type: LOGIN,
  payload: {
    ...user,
  },
});

export const walletAction = (expense) => ({
  type: WALLET,
  payload: {
    ...expense,
  },
});

export const isFetching = () => ({
  type: FETCHING,
});

export const receiveCurrenciesObject = (currencies) => ({
  type: RECEIVE_OJB,
  payload: {
    ...currencies,
  },
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_ARR,
  payload: [
    ...currencies,
  ],
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(isFetching());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      dispatch(receiveCurrenciesObject(json));
      const currencies = Object.keys(json)
        .filter((currenci) => currenci.length === NUM_CHARS);
      dispatch(receiveCurrencies(currencies));
      dispatch(isFetching());
    });
};
