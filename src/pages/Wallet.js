import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header data-testid="email-field">
          Usuário não logado
          <section data-testid="total-field">
            0
          </section>
          <section data-testid="header-currency-field">
            BRL
          </section>
        </header>
      </div>);
  }
}

export default Wallet;
