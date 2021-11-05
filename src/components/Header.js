// Informações da Paǵina de Cabeçalho e calculo para somar as despesas.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.somarDespesas = this.somarDespesas.bind(this);
  }

  somarDespesas() {
    const { expenses } = this.props;
    const INITIAL_CURRENCY = 'USD';
    const total = expenses.reduce((acc, expense) => {
      const { exchangeRates, value, currency = INITIAL_CURRENCY } = expense;
      const soma = exchangeRates[currency].ask;
      return acc + (soma * value);
    }, 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <div data-testid="email-field">{`Email: ${email}`}</div>
          <div data-testid="total-field">
            Despesa Total: R$
            {' '}
            { this.somarDespesas() }
          </div>
          <div data-testid="header-currency-field"> BRL </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
