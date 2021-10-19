const getCurrencyRate = async () => {
  const resultAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resultJSON = await resultAPI.json();
  return resultJSON;
};

export default getCurrencyRate;
