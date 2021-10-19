import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;

    const calcExpense = expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + value * exchangeRates[currency].ask), 0);

    return (
      <header>
        <h2 data-testid="email-field">{ user.email }</h2>
        Despesa Total: R$
        <p data-testid="total-field">
          {
            calcExpense
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
