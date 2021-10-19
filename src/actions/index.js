export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_TOTAL = 'SET_TOTAL';

export const emailSave = (email) => ({ type: 'SET_EMAIL', email });

export const currencySave = (currency) => ({ type: 'SET_CURRENCY', data: currency });

export const totalSave = (total) => ({ type: 'SET_TOTAL', total });

export function fetchAPI() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((json) => Object.keys(json))
      .then((json) => dispatch(currencySave(json)));
  };
}
