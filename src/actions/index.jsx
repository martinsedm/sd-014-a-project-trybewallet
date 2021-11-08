// import fetchCurrencyApi from '../services/currencyAPI';

export const SET_USER = 'SET_USER';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setUser = (payload) => ({
  type: SET_USER, payload,
});

export const setExpenses = (payload) => ({
  type: SET_EXPENSES, payload,
});

// export const fetchCurrencyApiThunk = () => async (dispatch) => {
//   const response = await fetchCurrencyApi();
//   const payload = {
//     currencyValue: response.USD.ask,
//   };
//   dispatch(setExpenses(payload));
// };
