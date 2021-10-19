import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses
      .reduce((acc, {
        value,
        currency,
        exchangeRates,
      }) => acc + (value * exchangeRates[currency].ask), 0);
    return (
      <div>
        <h1>TrybeWalltet</h1>
        <h3 data-testid="email-field">
          Usuário:&nbsp;
          { email }
        </h3>
        <h3 data-testid="total-field">
          Total das despesas:&nbsp;
          { totalExpenses }
          <span data-testid="header-currency-field"> BRL </span>
        </h3>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
