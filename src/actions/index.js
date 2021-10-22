// Coloque aqui suas actions
export const addUser = (value) => ({ type: 'ADD_USER', data: value });

export const getCurr = (curr) => ({ type: 'GET_CURR', data: curr });

export const addExpenses = (curr) => ({ type: 'ADD_EXPENSE', exp: curr });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(getCurr());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => Object.keys(currencies))
      .then((currencies) => dispatch(getCurr(currencies)));
  };
}
