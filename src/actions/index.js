// import fetchApi from '../components/FetchApi';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ERROR_API = 'ERROR_API';

export const saveStateLogin = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const errorApi = (payload) => ({
  type: ERROR_API,
  payload,
});

const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export const fetchApi = async (dispatch) => {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    return dispatch(addCurrencies(data));
  } catch (error) {
    return dispatch(errorApi);
  }
};

// export const addExpenseAction = (formData) => async (dispatch) => {
//   const { value, currency, method, tag, description } = formData;
//   const exchangeRates = await fetchApi();

// const rate = exchangeRates[currency].ask;

//   const payload = {
//     value,
//     currency,
//     method,
//     description,
//     tag,
//     exchangeRates,
//   };

//   dispatch(addExpense(payload));
// };

// export const LOGIN_EMAIL = 'LOGIN_EMAIL';
// export const ADD_EXPENSE = 'ADD_EXPENSE';
// export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
// export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

// export const fetchCurrenciesAction = () => async (dispatch) => {
//   const exchangeRates = await fetchAPI();

//   const payload = Object.values(exchangeRates).reduce((acc, crr) => {
//     if (!crr.name.includes('Turismo')) acc.push(crr.code);
//     return acc;
//   }, []);

//   dispatch({
//     type: FETCH_CURRENCIES,
//     payload,
//   });
// };
