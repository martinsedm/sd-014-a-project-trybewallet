import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, curr) => (
      acc
        + parseFloat(curr.value)
        * parseFloat(curr.exchangeRates[curr.currency].ask)
    ), 0);
    return totalExpenses.toFixed(2);
  }

  render() {
    const { setEmailUser } = this.props;
    return (
      <header className="ctn-header">
        <div>
          <img alt="Trybe Wallet Logo" className="logo-trybe-wallet" />
        </div>
        <h3 data-testid="email-field">{ setEmailUser }</h3>
        <p
          className="total-field"
          data-testid="total-field"
        >
          Despesa Total
          { this.sumExpenses() }
        </p>
        <p
          className="header-currency-field"
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  setEmailUser: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  setEmailUser: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
