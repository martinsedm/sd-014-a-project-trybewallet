export const ACTION = 'ACTION';

export const actionFunc = (func, func2) => ({
  type: ACTION,
  payload: {
    func,
    func2,
  },
});
