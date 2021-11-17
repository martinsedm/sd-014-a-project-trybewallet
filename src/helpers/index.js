const handleTotalState = (totalCost, expenses) => {
  const lastElementIndex = expenses.length - 1;
  const cost = expenses[lastElementIndex].value;
  const expenseCurrency = expenses[lastElementIndex].currency;
  const currencies = Object.entries(expenses[lastElementIndex].exchangeRates);
  const conversionRate = currencies.filter(
    (currency) => currency[0] === expenseCurrency,
  )[0][1].ask;
  const total = cost * conversionRate;
  totalCost(total);
};

export default handleTotalState;
