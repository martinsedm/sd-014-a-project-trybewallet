// Coloque aqui suas actions

export const login = (email) => ({
  type: 'LOGIN',
  email,
});

export const deleteExpense = (id) => ({
  type: 'DELETE_EXPENSE',
  id,
});

export const addExpenses = (expenses, currencies) => ({
  type: 'ADD_EXPENSES',
  expenses,
  currencies,
});

export const editExpenses = (expense) => ({
  type: 'EDIT_EXPENSE',
  expense,
});

export const editInput = (input) => ({
  type: 'EDIT_INPUT',
  input,
});

export const updateExpenses = (expenses) => ({
  type: 'UPDATE_EXPENSES',
  expenses,
});

export const addCurrencies = (currenciesList) => ({
  type: 'ADD_CURRENCIES',
  currenciesList,
});

export const saveExpenses = (expenses) => async (dispatch) => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await request.json();
    return dispatch(addExpenses(expenses, currencies));
  } catch (e) {
    console.log(`Currency request failed: ${e}`);
  }
};
