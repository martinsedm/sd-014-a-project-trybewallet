import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.expenseCalculator = this.expenseCalculator.bind(this);
  }

  expenseCalculator() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const total = expenses.reduce((acc, cur) => {
        const xchange = Number.parseFloat(cur.value)
        * Number.parseFloat(cur.exchangeRates[cur.currency].ask);
        acc += xchange;
        return acc;
      }, 0);
      return Number.parseFloat(total).toFixed(2);
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          {email}
        </h3>
        <h4 data-testid="total-field">
          {this.expenseCalculator()}
        </h4>
        <p data-testid="header-currency-field">
          BRL
        </p>
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

export default connect(mapStateToProps, null)(Header);
