export const userLogin = (email) => ({ type: 'USER_LOGIN', email }); // uma action creator. Uma função que cira uma action.

export const loadingFetch = () => ({ type: 'LOADING_FETCH' });

export const acceptFetch = (payload) => ({ type: 'ACCEPT_FETCH', payload });

export const rejectFecth = (payload) => ({ type: 'REJECT_FETCH', payload });

export const sendExpenses = (payload, responseJSON) => ({
  type: 'SEND_EXPENSES',
  payload,
  responseJSON,
});

export function fetchPosts(payload = false) { // payload
  return (dispatch) => { // função que consulta as moedas da API
    dispatch(loadingFetch());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((responseJSON) => (
        payload
          ? dispatch(sendExpenses(payload, responseJSON))
          : dispatch(acceptFetch(responseJSON))))
      .catch((error) => dispatch(rejectFecth(error)));
  };
}

export const deleteExpense = (id) => ({ type: 'DELETE_EXPENSE', id });

export const changeExpense = (expense) => ({ type: 'CHANGE_EXPENSE', expense });

// actions feitas com ajuda do repositorio: https://github.com/tryber/sd-011-project-trybewallet/pull/60
