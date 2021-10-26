import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  handleSum() {
    const { expenses } = this.props;
    const Sum = expenses.reduce((acc, cur) => {
      const { ask } = Object.values(
        cur.exchangeRates,
      ).find(({ code }) => code === cur.currency);
      return acc + (cur.value * ask);
    }, 0);
    return Sum;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ this.handleSum() }</span>
        <span data-testid="header-currency-field">BRL</span>
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
