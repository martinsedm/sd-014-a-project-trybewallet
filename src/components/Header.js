import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  totalExpenses = (expenses) => expenses.reduce((acc, exp) => {
    acc += (exp.value * exp.exchangeRates[exp.currency].ask);
    return acc;
  }, 0).toFixed(2)

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          {email}
        </p>
        <p data-testid="total-field">
          {this.totalExpenses(expenses)}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
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

export default connect(mapStateToProps, null)(Header);
