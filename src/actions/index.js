// Coloque aqui suas actions
export const GET_USER_LOGIN = 'GET_USER_LOGIN';
export const GET_EXPENSE = 'GET_EXPENSE';
export const GET_CURRENCY = 'GET_CURRENCY';

export const getUserLogin = (payload) => ({
  type: GET_USER_LOGIN,
  payload,
});

export const getExpense = (payload) => ({
  type: GET_EXPENSE,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export function fetchCurrency() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const responseJson = await response.json();
      const coins = Object.keys(responseJson);
      const coinsFiltered = coins.filter((item) => (
        item !== 'USDT' && item !== 'DOGE'
      ));
      console.log(coinsFiltered);
      dispatch(getCurrency(coinsFiltered));
    } catch (error) {
      console.error(error);
    }
  };
}
