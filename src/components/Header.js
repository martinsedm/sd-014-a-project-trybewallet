import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.expensesFunction = this.expensesFunction.bind(this);
  }

  expensesFunction() {
    const NUMBER_AMOUNT = 2;
    const { expenses } = this.props;

    if (expenses[0] === undefined || expenses[0].id === undefined) return '0.00';

    const convertedValue = expenses.map((item) => {
      const currency = Object.values(item.exchangeRates)
        .find((coin) => coin.code === item.currency);
      const sum = Number(item.value) * Number(currency.ask);

      return sum.toFixed(NUMBER_AMOUNT);
    }).reduce((accum, curr) => (Number(accum) + Number(curr)));

    return Number(convertedValue).toFixed(NUMBER_AMOUNT);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <h5 data-testid="email-field">{email}</h5>
        <h5 data-testid="total-field">{this.expensesFunction()}</h5>
        <h5 data-testid="header-currency-field">BRL</h5>
      </div>
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
