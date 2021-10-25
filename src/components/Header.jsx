import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    let total = 0;
    const values = [];
    if (expenses.length === 0) {
      return total;
    }
    if (expenses.length === 1) {
      total = expenses[0].exchangeRates[expenses[0].currency].ask * expenses[0].value;
    }
    if (expenses.length > 1) {
      expenses.map((expense) => values.push(parseFloat(
        expense.exchangeRates[expense.currency].ask * expense.value,
      )));
      total = values.reduce((vt, vc) => vt + vc);
    }
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">
          { email }
        </h1>
        <h2 type="text" data-testid="total-field" name="total">
          { this.totalExpenses() }
        </h2>
        <fieldset>
          <div data-testid="header-currency-field"> BRL </div>
        </fieldset>
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
  expenses: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
