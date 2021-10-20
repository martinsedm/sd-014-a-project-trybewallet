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
      <header className="p-0 bg-dark text-white">
        <div className="container">
          <div
            className="d-flex flex-wrap
          align-items-center
          justify-content-center
          justify-content-lg-start"
          >
            <p className="col" data-testid="email-field">{email}</p>
            <p className="col" data-testid="total-field">
              {this.expensesFunction()}
              {' '}
              <span data-testid="header-currency-field">BRL</span>
            </p>
          </div>
        </div>
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
