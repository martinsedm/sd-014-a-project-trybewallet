// Coloque aqui suas actions
import getCurrencyAPI from '../services/awesomeAPI';

export const EMAIL = 'EMAIL';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';

export const saveEmail = (email) => ({
  type: EMAIL,
  payload: {
    email,
  },
});

export const fetchCurrency = (currencies) => ({
  type: FETCH_CURRENCY,
  payload: {
    currencies,
  },
});

// export function fetchAPI() {
//   return async (dispatch) => {
//     const data = await getCurrencyAPI();
//     dispatch(fetchCurrency(data));
//   };
// }

export const fetchAPI = () => async (dispatch) => {
  const currencies = await getCurrencyAPI();
  dispatch(fetchCurrency(currencies));
};
