import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = { // setando o estado inicial do componente Login.
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidUpdate() { // é invovcado após alguma atualização ocorrer. Neste caso, quando ocorrer a validação do usuario.
    this.validate();
  }

  // a função abaixo se trata das validações do login.
  validate() {
    const { email, password, isDisabled } = this.state; // pega o estado inicial
    const number = 6; // variavel que determina o minimo de numeros do password.
    const verifyEmail = email.split('').includes('@') && email.split('.').includes('com');
    const verifyPassword = password.length >= number;
    if (verifyEmail && verifyPassword && isDisabled) {
      this.setState({ isDisabled: false });
    } else if ((!verifyEmail || !verifyPassword) && !isDisabled) {
      this.setState({ isDisabled: true });
    }
  }
  // depois que a validação é feita, o botão é desabilitado.

  // componente controloado. É uma função que altera o estado toda vez que o valor do input mudar.
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }); // altera os dados que estão no inputs
  } // é uma função dimamica/ generica pq ela serve para qualquer input. ela é capaz de alterar ambas chaves.

  render() {
    const { email, password, isDisabled } = this.state;
    const { dispatchLogin } = this.props;

    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="alguem@email.com"
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Senha"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ () => dispatchLogin(email) } // dispara uma action do tipo "user_login"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

// a props dispatch login é uma função que recebe o email e dispara uma action do tipo "user_login"

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(userLogin(email)), // faz o dispatch da aciton userLogin com o email
}); // função que mapeia os dispatch das actions ao compomente

Login.propTypes = {
  dispatchLogin: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login); // ele envolve o componente dando a ele funcionalidade novas para "conversar" com o redux;

// componente feito com a ajuda do respositorio da Gisele Costa https://github.com/tryber/sd-011-project-trybewallet/pull/60
