const filterXpenses = (expenses, id) => {
  // let newId = 0;
  const filtered = expenses.filter((xpense) => {
    if (parseInt(xpense.id, 10) !== parseInt(id, 10)) {
      // xpense.id = newId;
      // newId += 1;
      return xpense;
    }
    return false;
  });
  return filtered;
};

export default filterXpenses;
