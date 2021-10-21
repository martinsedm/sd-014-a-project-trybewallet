import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      expense: 0,
    };
    this.expensesMath = this.expensesMath.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { expenses } = prevProps.wallet;
    const { wallet } = this.props;
    if (expenses.length !== wallet.expenses.length) {
      this.expensesMath();
    }
  }

  expensesMath() {
    const { wallet } = this.props;
    const { expenses } = wallet;
    expenses
      .map(({ value, exchangeRates, currency }) => this.setState(
        { expense: value * exchangeRates[currency].ask },
      ));
  }

  render() {
    const { email } = this.props;
    const { expense } = this.state;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{expense}</p>
        <p data-testid="header-currency-field">BRL</p>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  }),
};

Header.defaultProps = {
  email: 'xablau@trybe.com',
  wallet: {},
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
