const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const getApiMoney = () => (
  fetch(`${API_URL}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok
          ? Promise.resolve(Object.values(json))
          : Promise.reject(json)))
    ))
);

export default getApiMoney;
