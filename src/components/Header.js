import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesas } = this.props;
    return (
      <header>
        <h1>Saturno Wallet</h1>
        <h2 data-testid="email-field">
          Email:
          {email}
        </h2>
        <h2 data-testid="total-field">
          Despesa Total: R$
          {despesas}
        </h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.func.isRequired,
};

export default Header;
