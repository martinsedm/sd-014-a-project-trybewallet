const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchAPI = async () => {
  try {
    const moedas = await fetch(url);
    const result = await moedas.json();
    delete result.USDT;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;
