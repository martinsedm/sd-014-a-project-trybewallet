const currencyXchanger = (value, xchangeRate) => {
  const calculus = Number.parseFloat(value)
        * Number.parseFloat(xchangeRate);
  return Number.parseFloat(calculus).toFixed(2);
};

export default currencyXchanger;
