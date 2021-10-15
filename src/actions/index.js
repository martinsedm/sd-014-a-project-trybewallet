// Login page
export const login = (email) => ({
  type: 'LOGIN',
  email,
});

// Wallet page
export const addCurrencies = (currenciesList) => ({
  type: 'ADD_CURRENCIES',
  currenciesList,
});

export const currenciesToState = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencyList = await request.json();
  if (currencyList.USDT) delete currencyList.USDT;
  dispatch(addCurrencies(Object.keys(currencyList)));
};

export const deleteExpense = (id) => ({
  type: 'DELETE_EXPENSE',
  id,
});

export const editExpense = (expense) => ({
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

// adicionar uma expense
export const addExpense = (expenses, currencies) => ({
  type: 'ADD_EXPENSE',
  expenses,
  currencies,
});

export const newExpense = (expenses) => async (dispatch) => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await request.json();
    return dispatch(addExpense(expenses, currencies));
  } catch (e) {
    console.log(`Currency request failed: ${e}`);
  }
};
