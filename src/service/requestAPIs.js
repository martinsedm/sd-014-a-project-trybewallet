const LINK_API_CURRENCIES = 'https://economia.awesomeapi.com.br/json/all';

export const apiCurrencies = async () => {
  const fetchApi = await fetch(LINK_API_CURRENCIES);
  const response = await fetchApi.json();
  return response;
};

export const formatObjCurrencies = (obj, keyForDelete) => {
  const keysFormated = obj === undefined ? [] : Object.keys(obj)
    .filter((key) => key !== keyForDelete);
  return keysFormated;
};
