// Coloque aqui suas actions
function login(email) {
  return {
    type: 'USER_LOGIN',
    email,
  };
}
export default login;
