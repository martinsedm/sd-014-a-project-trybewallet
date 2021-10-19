import { 
  INPUT_EMAIL,
  REQUEST_FAIL,
  REQUEST_START,
  REQUEST_SUCCESS,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE_END,
  EDIT_EXPENSE_START,
  getCurrenciesFromAPI
} from "../services/noMagicStuff";

export const emailChange = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});

const reqCurrencies = () => ({
  type: REQUEST_START,
});

const reqCurrenciesSuccess = (currencies) => ({
  type: REQUEST_SUCCESS,
  currencies,
});

const reqCurrenciesFail = (error) => ({
  type: REQUEST_FAIL,
  error,
});

export const saveExpense = (expenses) => ({
  type: SAVE_EXPENSE,
  expenses,
});

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE_START,
  expense,
});

export const endExpenseEdit = (expense) => ({
  type: EDIT_EXPENSE_END,
  expense,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    dispatch(reqCurrencies());
    const currencies = await getCurrenciesFromAPI();
    dispatch(reqCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(reqCurrenciesFail(error));
  }
};