const END_POINT_CURRENCY = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencyApi = async () => {
  const response = await fetch(END_POINT_CURRENCY);
  const getCurrency = await response.json();
  return getCurrency;
};

export default getCurrencyApi;
