import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    // Consultei: https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
    const totalExpenses = expenses
      .reduce((acc, {
        value,
        exchangeRates,
        currency,
      }) => acc + (value * exchangeRates[currency].ask), 0);

    return (
      <header>
        <h1>TrybeWallet</h1>
        <h3
          data-testid="email-field"
        >
          { email }
        </h3>
        <h4
          data-testid="total-field"
        >
          Despesa total:
          {' '}
          { totalExpenses }
        </h4>
        <h4
          data-testid="header-currency-field"
        >
          BRL
        </h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
