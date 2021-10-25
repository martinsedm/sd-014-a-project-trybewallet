import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.countExpenses = this.countExpenses.bind(this);
  }

  countExpenses() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;

    const sumExpenses = expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + Number(value) * exchangeRates[currency].ask), 0);
    return sumExpenses;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">{ this.countExpenses() }</p>
        <h3 data-testid="header-currency-field">BRL</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
