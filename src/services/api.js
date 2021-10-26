export async function getValue() {
  const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await fetchApi.json();
  return json;
}

export async function getCoin() {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonFetchAPI = await fetchAPI.json();
  const coins = Object.keys(jsonFetchAPI);
  const currency = coins.filter((coin) => (coin !== 'USDT'));
  return currency;
}
