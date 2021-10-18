import { LOGIN,
  CURRENCY_LOAD,
  CURRENCY_LOAD_SUCCESS,
  CURRENCY_LOAD_FAILURE,
  ADD_EXPENSE,
} from './actionTypes';

export const login = (email) => ({
  type: LOGIN,
  email,
});
export const currencyLoad = () => ({
  type: CURRENCY_LOAD,
});
export const currencyLoadSuccess = (payload) => ({
  type: CURRENCY_LOAD_SUCCESS,
  payload,
});
export const currencyLoadFailure = (payload) => ({
  type: CURRENCY_LOAD_FAILURE,
  payload,
});
export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const getCurrencies = () => async (dispatch) => {
  currencyLoad();

  try {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await data.json();
    return dispatch(currencyLoadSuccess(response));
  } catch (error) {
    return dispatch(currencyLoadFailure(error.message));
  }
};

export function converted(expenses) {
  return expenses.reduce((acc, curr) => {
    const rates = curr.exchangeRates[curr.currency];
    return acc + Number(curr.value) * rates.ask;
  }, 0);
}

export function filtered(currencies) {
  const mapRawResponse = Object.entries(currencies).map((currency) => currency[1]);
  const treatedResponse = mapRawResponse
    .filter((currency) => currency.codein !== 'BRLT');
  const currencyOptions = treatedResponse
    .map((currency) => currency.code);
  return currencyOptions;
}
