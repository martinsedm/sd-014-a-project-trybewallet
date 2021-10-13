import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  getTotal(expenses) {
    let total = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      const rate = exchangeRates[currency].ask;
      total += (parseFloat(value) * parseFloat(rate));
    });
    return total;
  }

  render() {
    const { email, expenses, currencyToExchange } = this.props;
    return (
      <header className="header">
        <h1 className="text-success">Trybewallet</h1>

        <div className="infos-container">
          <p data-testid="email-field">{`Email: ${email}`}</p>

          <p data-testid="total-field">
            {`Despesa Total: R$ ${this.getTotal(expenses).toFixed(2)} `}
            <span data-testid="header-currency-field">{currencyToExchange}</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencyToExchange: state.wallet.currencyToExchange,

});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencyToExchange: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
