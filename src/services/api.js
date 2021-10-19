export async function getAPI() {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonFetchAPI = await fetchAPI.json();
  return jsonFetchAPI;
}

export async function getCoin() {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonFetchAPI = await fetchAPI.json();
  const coins = Object.keys(jsonFetchAPI);
  const currency = coins.filter((coin) => (coin !== 'USDT'));
  return currency;
}
