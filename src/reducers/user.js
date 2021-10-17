const initialUserState = {
  user: {
    email: '',
  },
};

export default function user(state = initialUserState, { type, payload }) {
  switch (type) {
  case user:
    return { ...state, user: payload };
  default:
    return state;
  }
}
