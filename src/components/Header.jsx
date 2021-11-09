import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.calculateExpense = this.calculateExpense.bind(this);
  }

  calculateExpense() {
    const { wallet } = this.props;

    const total = wallet.expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const { ask } = exchangeRates[currency];
      const convertedValue = value * ask;
      return acc + convertedValue;
    // const valor
    }, 0);
    return total;
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { user.email }
        </p>
        <p data-testid="total-field">
          { this.calculateExpense() }
        </p>
        <p data-testid="header-currency-field"> BRL </p>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired, // wallet: PropTypes.objectOf(PropTypes.any).isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  user,
  wallet,
});

export default connect(mapStateToProps, null)(Header);
