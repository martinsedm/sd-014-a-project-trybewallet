// Coloque aqui suas actions
export const RU1BSUw = 'RU1BSUw';
export const R0VUX0NVUlJFTkNZX1NVQ0tTRVg = 'R0VUX0NVUlJFTkNZX1NVQ0tTRVg';
export const R0VUX0NVUlJFTkNZX0VSUk9S = 'R0VUX0NVUlJFTkNZX0VSUk9S';
export const QUREX0VYUEVOU0U = 'QUREX0VYUEVOU0U';
export const UkVNT1ZFX0VYUEVOU0U = 'UkVNT1ZFX0VYUEVOU0U';
export const Q0hBTkdFX0VESVRfU1RBVEU = 'Q0hBTkdFX0VESVRfU1RBVEU';
export const U0VUX0VESVRFRF9FWFBFTlNF = 'U0VUX0VESVRFRF9FWFBFTlNF';

export function VVNFUl9FTUFJTA(payload) {
  return {
    type: RU1BSUw,
    payload,
  };
}

export function Z2V0Q3VycmVuY3lTdWNrU2V4(payload) {
  return {
    type: R0VUX0NVUlJFTkNZX1NVQ0tTRVg,
    payload,
  };
}

export function Z2V0Q3VycmVuY3lFcnJvcg(payload) {
  return {
    type: R0VUX0NVUlJFTkNZX0VSUk9S,
    payload,
  };
}

export const Z2V0Q3VycmVuY3lUaHVuaw = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    dispatch(Z2V0Q3VycmVuY3lTdWNrU2V4(await response.json()));
  } catch (error) {
    dispatch(Z2V0Q3VycmVuY3lFcnJvcg(error));
  }
};

export function YWRkRXhwZW5zZQ(payload) {
  return {
    type: QUREX0VYUEVOU0U,
    payload,
  };
}

export function cmVtb3ZlRXhwZW5zZQ(payload) {
  return {
    type: UkVNT1ZFX0VYUEVOU0U,
    payload,
  };
}

export function Y2hhbmdlRWRpdFN0YXRl(payload) {
  return {
    type: Q0hBTkdFX0VESVRfU1RBVEU,
    payload,
  };
}

export function c2V0RWRpdGVkRXhwZW5zZQ(payload) {
  return {
    type: U0VUX0VESVRFRF9FWFBFTlNF,
    payload,
  };
}
