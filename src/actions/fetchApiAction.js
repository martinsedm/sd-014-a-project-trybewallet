export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';
export const GET_EXPENSES = 'GET_EXPENSES';

const getCurrencies = (payload) => ({
  type: API_SUCESS,
  payload,
});

const apiError = (payload) => ({
  type: API_ERROR,
  payload,
});

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const fetchApiThunk = () => async (dispatch) => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    delete response.USDT;
    const sucess = Object.keys(response);
    dispatch(getCurrencies(sucess));
  } catch (error) {
    dispatch(apiError(error.message));
  }
};
