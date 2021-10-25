const url = 'https://economia.awesomeapi.com.br/json/last';

const currencyExchanges = async (value, currency) => {
  try {
    const rateResponse = await fetch(`${url}/${currency}`);
    const json = await rateResponse.json();

    const rate = json[Object.keys(json)].ask;
    return value * rate;
  } catch (error) {
    console.log(error);
  }
};

export default currencyExchanges;
