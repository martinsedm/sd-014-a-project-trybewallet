import React from 'react';
import PropTypes from 'prop-types';

import { LoginForm } from '../components';

class Login extends React.Component {
  constructor() {
    super();
    this.goToWallet = this.goToWallet.bind(this);
  }

  goToWallet() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    return (
      <div className="page">
        <LoginForm redirect={ this.goToWallet } />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
