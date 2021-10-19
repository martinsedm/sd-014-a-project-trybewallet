const CURRENT_API = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrentApi = () => (
  fetch(CURRENT_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrentApi;
