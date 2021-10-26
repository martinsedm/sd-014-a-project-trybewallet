import React from 'react';

export function emailValidation(email) {
  const emailRgx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRgx.test(email);
}

export function passwordValidation(password) {
  const MIN_LENGTH = 6;
  return password.length >= MIN_LENGTH;
}

export async function getCurrencies() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  const currencies = Object.keys(response).filter((currency) => currency !== 'USDT');
  return currencies;
}

export function mapCurrency(currencies) {
  return currencies.map((currency) => (
    <option key={ currency } value={ currency }>
      { currency }
    </option>
  ));
}
