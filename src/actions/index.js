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

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const errorApi = (payload) => ({
  type: ERROR_API,
  payload,
});

const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export function fetchApi() {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      return dispatch(addCurrencies(data));
    } catch (error) {
      return dispatch(errorApi);
    }
  };
}
