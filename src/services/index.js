const TRYBE_WALLET_KEY = 'trybe_wallet';
const EXPENSES_KEY = 'expenses';
const TIME_OUT_SIMULATION = 1000;

export const saveToLocalStorage = (email, expenses) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const localStorageContent = localStorage.getItem(TRYBE_WALLET_KEY);
    const content = localStorageContent ? JSON.parse(localStorageContent) : [];
    const object = { user: email, expenses: [...expenses] };
    const index = content.findIndex(({ user }) => user === email);
    if (index >= 0) {
      content[index] = object;
    } else {
      content.push(object);
    }
    localStorage.setItem(TRYBE_WALLET_KEY, JSON.stringify(content));
    if (localStorage.getItem(TRYBE_WALLET_KEY)) resolve();
    const error = new Error('Não foi possível salvar no LS');
    reject(error);
  }, TIME_OUT_SIMULATION);
});

export const loadFromLocalStorage = (email) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const localStorageContent = localStorage.getItem(TRYBE_WALLET_KEY);
    const content = localStorageContent ? JSON.parse(localStorageContent) : [];
    const found = content.find(({ user }) => user === email);
    console.log(EXPENSES_KEY in found);
    if (EXPENSES_KEY in found) {
      const { expenses } = found;
      resolve(expenses);
    } else if (found) {
      const error = new Error('Erro ao acessar LS');
      reject(error);
    }
    resolve([]);
  }, TIME_OUT_SIMULATION);
});
