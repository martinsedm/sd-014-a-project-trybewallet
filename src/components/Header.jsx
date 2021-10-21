import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyXchanger from './CurrencyExchange';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.expenseCalculator = this.expenseCalculator.bind(this);
  }

  componentDidUpdate() {
    this.expenseCalculator();
  }

  expenseCalculator() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const total = expenses.reduce((acc, cur) => {
        acc += parseFloat(currencyXchanger(
          cur.value, cur.exchangeRates[cur.currency].ask,
        ));
        return acc;
      }, 0);
      return Number.parseFloat(total).toFixed(2);
    }
    return 0;
  }

  render() {
    // console.log(this.props.expenses)
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
