const coinApi = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {
      if (res.USDT) delete res.USDT;
      return Promise.resolve(res);
    })
    .catch((error) => Promise.reject(error))
);

export default coinApi;
