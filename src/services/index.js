const TRYBE_WALLET_KEY = 'trybe_wallet';

export const saveToLocalStorage = (email, expenses) => {
  const localStorageContent = localStorage.getItem(TRYBE_WALLET_KEY);
  const content = localStorageContent ? JSON.parse(localStorageContent) : [];
  const object = { user: email, expenses: [...expenses] };
  const index = content.findIndex(({ user }) => user === email);
  if (index >= 0) {
    content[index] = object;
  } else {
    content.push(object);
  }
  console.log(content);
  localStorage.setItem(TRYBE_WALLET_KEY, JSON.stringify(content));
};

export const loadFromLocalStorage = (email) => {
  const localStorageContent = localStorage.getItem(TRYBE_WALLET_KEY);
  const content = localStorageContent ? JSON.parse(localStorageContent) : [];
  const found = content.find(({ user }) => user === email);
  if (found) {
    return found.expenses;
  }
  return [];
};
