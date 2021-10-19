export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const setEmail = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const fetchCurrencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const fetchAPI = () => (
  async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const response = Object.keys(await request.json());
      const filteredCurrencies = response.filter((currencie) => currencie !== 'USDT');
      dispatch(fetchCurrencies(filteredCurrencies));
    } catch (error) {
      console.log(error.message);
    }
  }
);
