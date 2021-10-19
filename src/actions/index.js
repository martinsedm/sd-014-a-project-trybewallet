export const USER_LOGIN = 'USER_LOGIN';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const userLoginEmail = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const apiSuccess = (payload) => ({
  type: API_SUCCESS,
  payload,
});

export const apiFailure = (payload) => ({
  type: API_FAILURE,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  try {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(endpoint);
    const data = await response.json();
    dispatch(apiSuccess(Object.keys(data)));
  } catch (error) {
    dispatch(apiFailure(error));
  }
};
