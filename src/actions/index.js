const emailAction = (email) => ({
  type: 'USER_EMAIL',
  payload: {
    email,
  },
});

export default emailAction;
