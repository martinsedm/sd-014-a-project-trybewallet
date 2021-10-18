// Coloque aqui suas actions
export const USER_CASE = 'USER_CASE';
export const EXPENSE_CASE = 'EXPENSE_CASE';
export const TOTAL_EXPENSE = 'TOTAL_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

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

export function totalExpenseAction(data) {
  return {
    type: TOTAL_EXPENSE,
    payload: data,
  };
}

export function expenseThunk(data) {
  return function expenseThunked(dispatch) {
    return dispatch(expenseAction(data));
  };
}

export function deleteExpenseAction(data) {
  return {
    type: DELETE_EXPENSE,
    payload: data,
  };
}
