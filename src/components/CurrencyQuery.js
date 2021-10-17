const fetchCurrency = async () => {
  try {
    const fetchRequest = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyList = await fetchRequest.json();
    const filteredCurrency = Object.values(currencyList)
      .filter((currency) => currency.codein !== 'BRLT'); // That's the codein for USDT
    return filteredCurrency;
  } catch (error) {
    return null;
  }
};

export default fetchCurrency;
