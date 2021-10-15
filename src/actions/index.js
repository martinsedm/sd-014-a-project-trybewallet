export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_TOTAL = 'SET TOTAL';

export const emailSave = (email) => ({ type: 'SET_EMAIL', email });

export const currencySave = (currency) => ({ type: 'SET_CURRENCY', currency });

export const totalSave = (total) => ({ type: 'SET_TOTAL', total });
