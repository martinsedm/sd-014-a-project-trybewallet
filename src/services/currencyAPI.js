/**
 * Consultei o repositório do Thiago Almeida para resolver essa parte.
 * Link do repositório: https://github.com/tryber/sd-014-a-project-trybewallet/pull/87/commits/f24eb8fe36651d08d8293d56ee607b8d1d9b1321
 */
const ECONOMIA_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

export const getAllCoins = () => (
  fetch(ECONOMIA_BASE_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

// forma 2
// export const async getAllCoins() => (
//   const response = await  fetch(ECONOMIA_BASE_API)
//   const currencies = await response.json();
//   return currencies;
// );

export default getAllCoins;
