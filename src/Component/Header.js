import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2 data-testid="email-field">email da pessoa usuario state Global</h2>
        <span data-testid="total-field">Despesa total gerado - 0 -</span>
        <p data-testid="header-currency-field">Qual câmbio</p>
      </header>
    );
  }
}

export default Header;
