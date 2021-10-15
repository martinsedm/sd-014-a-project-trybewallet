const coinApi = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {
      if (res.USDT) delete res.USDT;
      const array = Object.values(res);
      return Promise.resolve(array);
    })
    .catch((error) => Promise.reject(error))
);

export default coinApi;
