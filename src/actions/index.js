export const SEND_DATA = 'SEND_DATA';
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const submitLogin = (state) => ({ type: 'SEND_DATA', state });

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetcheError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});
