const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencyApi = async () => {
  // fetch(API_URL).then((response) => {
  //   response.json()
  //     .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)));
  const result = await fetch(API_URL);
  const jsonX = await result.json();
  return jsonX;
};

export default fetchCurrencyApi;
