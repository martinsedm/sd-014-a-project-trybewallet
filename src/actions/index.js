// Coloque aqui suas actions.
export const USER_LOGGED = 'USER_LOGGED';
export const API_SUCCESS = 'API_SUCCESS';
export const API_EXCHANG_RATES = 'API_EXCHANG_RATES';
export const FETCH_EXPENSE = 'FETCH_EXPENSE';
export const userLogged = (email) => ({
  type: USER_LOGGED,
  payload: email,
});

export const apiSuccess = (response) => ({
  type: API_SUCCESS,
  payload: Object.keys(response)
    .filter((currency) => currency !== 'USDT' && currency !== 'DOGE'),
});

export const expenses = (formsState) => ({
  type: API_EXCHANG_RATES,
  payload: formsState,
});

// export const fetchExpense = (responseExpense) => ({
//   type: FETCH_EXPENSE,
//   payload: responseExpense,
// });

// export const fetchApiExpense = () => async (dispatch) => {
//   const requestExpense = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const responseExpense = await requestExpense.json();
//   return dispatch(fetchExpense(responseExpense));
// };

const fetchApi = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return dispatch(apiSuccess(response));
};

export default fetchApi;
