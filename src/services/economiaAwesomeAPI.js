const ECONOMIA_BASE_API = 'https://economia.awesomeapi.com.br';

export const getAllCoins = () => (
  fetch(`${ECONOMIA_BASE_API}/json/all`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getAllCoins;
