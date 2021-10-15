// Coloque aqui suas actions
export const USER_CASE = 'USER_CASE';
export const EXPENSE_CASE = 'EXPENSE_CASE';

export function userAction(data) {
  return {
    type: USER_CASE,
    payload: data,
  };
}

export function expenseAction(data) {
  return {
    type: EXPENSE_CASE,
    payload: data,
  };
}

export function expenseThunk(data) {
  return async function (dispatch) {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    console.log(data);
    console.log(json);
    return dispatch(expenseAction(data));
  };
}
