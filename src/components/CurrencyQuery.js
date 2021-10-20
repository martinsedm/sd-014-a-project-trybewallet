const fetchCurrency = async (toArray) => {
  try {
    const fetchRequest = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyList = await fetchRequest.json();
    if (toArray) {
      const filteredCurrency = Object.values(currencyList)
        .filter((currency) => currency.codein !== 'BRLT'); // That's the codein for USDT
      return filteredCurrency;
    }
    delete currencyList.USDT;
    return currencyList;
  } catch (error) {
    return null;
  }
};

export default fetchCurrency;

// https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
