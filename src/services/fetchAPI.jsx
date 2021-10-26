export const fetchExpense = (state) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(updateExpense({ ...state, exchangeRates: response })))
);

export const fetchCurrency = () => (dispatch) => {
  dispatch(loading());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => {
      const allCurrencies = Object.keys(response);
      const USDTdeleted = allCurrencies.filter((currency) => currency !== 'USDT');
      dispatch(updateCurrency(USDTdeleted));
    });
};
