import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const { expenses } = this.props;
    return Number(expenses.reduce((acc, cur) => {
      const brlValue = Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask);
      return acc + brlValue;
    }, 0)).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">{email}</h1>
        <h2 data-testid="total-field">{this.getTotal()}</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
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

export default connect(mapStateToProps)(Header);
