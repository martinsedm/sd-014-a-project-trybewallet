export const LOADING = 'LOADING';
export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';

const loading = () => ({
  type: LOADING,
});

const apiSucess = (results) => ({
  type: API_SUCESS,
  payload: results,
});

const apiError = (erro) => ({
  type: API_ERROR,
  payload: erro,
});

const fetchApiThunk = () => async (dispatch) => {
  dispatch(loading);
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    delete response.USDT;
    const sucess = Object.keys(response);
    dispatch(apiSucess(sucess));
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

export default fetchApiThunk;
