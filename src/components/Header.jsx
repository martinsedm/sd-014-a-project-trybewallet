import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, expenses } = this.props;
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
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
