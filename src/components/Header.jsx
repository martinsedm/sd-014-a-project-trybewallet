import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailUser, expenses } = this.props;
    const totalDespesas = expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];
      const total = value * ask;
      acc += total;
      return acc;
    }, 0);
    return (
      <div>
        <h2>TrybeWallet</h2>
        <header>
          <h4 data-testid="email-field">{ emailUser }</h4>
          <h4>
            Total das despesas:
            <span data-testid="total-field">{totalDespesas.toFixed(2)}</span>
          </h4>
          <h4>
            Moeda corrente:
            <span data-testid="header-currency-field">BRL</span>
          </h4>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,

};

const mapStateToProps = (state) => ({

  emailUser: state.user.email,
  expenses: state.wallet.expenses,

});

export default connect(mapStateToProps)(Header);
