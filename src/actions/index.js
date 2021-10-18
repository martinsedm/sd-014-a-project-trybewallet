// Coloque aqui suas actions

const LOG_IN = 'LOG_IN';
export default LOG_IN;

// Action Creator
export function emailForAction(value) {
  return {
    type: LOG_IN,
    playload: value,
  };
}

// Action Creator
// export const fetchAPI = () => {

// };
