export const USER_LOGIN = 'user-login';
export const FETCH_SUCESS = 'fetch-sucess';
export const FETCH_FAIL = 'fetch-fail';
export const FETCH_EXPENSE = 'fetch-expense';
export const EXPENSE_TOTAL = 'expense-total';

export const userLogin = (payload) => ({ type: USER_LOGIN, payload });

export const fetchSucess = (payload) => ({ type: FETCH_SUCESS, payload });

export const fetchFail = (payload) => ({ type: FETCH_FAIL, payload });

export const fetchExpense = (payload) => ({ type: FETCH_EXPENSE, payload });

export const expenseTotal = () => ({ type: EXPENSE_TOTAL });

export const FetchAPIMoedas = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return Object.keys(data);
};

export const FetchMoedas = () => async (dispatch) => {
  try {
    dispatch(fetchSucess(await FetchAPIMoedas()));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};

export const FetchAPIMoedasExpense = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

export const addExpense = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_EXPENSE,
      payload: {
        ...payload,
        exchangeRates: await FetchAPIMoedasExpense(),
      },
    });
    dispatch(expenseTotal());
  } catch (error) {
    dispatch(fetchFail(error));
  }
};
