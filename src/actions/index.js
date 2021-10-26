export function emailAction(newEmail) {
  return {
    type: 'NEW_EMAIL',
    newEmail,
  };
}

export function fetchCurrencies() {
  return (dispatch) => { // thunk declarado
    dispatch(fetchCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => currencies.filter((currency) => currency.code !== 'USDT'))
      .then((currencies) => dispatch(receiveCurrencies(currencies)))
      .catch((error) => dispatch(receiveError(error)));
  };
}
