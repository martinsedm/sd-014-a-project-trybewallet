export const LOGIN = 'LOGIN';
// export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ERROR_API = 'ERROR_API';

export const saveStateLogin = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

// export const addExpense = (payload) => ({
//   type: ADD_EXPENSE,
//   payload,
// });

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: {
    currencies,
  },
});

export const errorApi = (error) => ({
  type: ERROR_API,
  payload: {
    error,
  },
});

const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export function fetchApi() {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      const arrayData = Object.keys(data);
      const arrayCurrencies = arrayData.filter((curren) => curren !== 'USDT');
      return dispatch(addCurrencies(arrayCurrencies));
    } catch (error) {
      return dispatch(errorApi);
    }
  };
}
