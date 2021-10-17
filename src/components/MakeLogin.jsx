import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MakeLogin extends Component {
  render() {
    return (
      <section>
        <h3>Faça seu login antes de usar a aplicação</h3>
        <p>Clique no botão abaixo para ir para a seção de login</p>
        <button type="button">
          <Link to="/">Login</Link>
        </button>
      </section>
    );
  }
}

MakeLogin.propTypes = {

};

export default MakeLogin;
