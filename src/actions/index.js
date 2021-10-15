export const APPLICATION = 'APPLICATION';

export const application = (user, wallet) => ({
  type: APPLICATION,
  payload: {
    user,
    wallet,
  },
});
