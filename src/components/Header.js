import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  countExpenses = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    const totalExpense = expenses.reduce((acc, cur) => acc + cur);
    return totalExpense;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <h3 data-testid="total-field">
          { this.countExpenses() }
        </h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
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
