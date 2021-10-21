import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    const totalExpenses = expenses.reduce((total, expense) => {
      const valueBRL = Math.round(Number(expense.value)
        * Number(expense.exchangeRates[expense.currency].ask) * 100) / 100;

      total += valueBRL;
      return total;
    }, 0);
    console.log(expenses);
    return (
      <header>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
        <p
          data-testid="total-field"
        >
          { totalExpenses }
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);

// https://github.com/tryber/sd-014-a-project-trybewallet/pull/2/commits/ded6d06fbbdc86fc7fdd36fef2b5b3cf15df0dff
