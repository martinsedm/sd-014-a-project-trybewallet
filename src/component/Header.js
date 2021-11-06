import PropTypes from 'prop-types';
import React from 'react';
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
        const xchange = Number.parseFloat(cur.value) // .toFixed(2)
        * Number.parseFloat(((cur.exchangeRates[cur.currency].ask) * 100) / 100); // .toFixed(2);
        acc += xchange;
        // return Number.parseFloat(acc).toFixed(2);
        return acc;
      }, 0);
      console.log(total);
      return total;
    } return 0;
  }

  render() {
    const { emailPessoa, expenses } = this.props;
    return (
      <header>
        <span>
          <h1 data-testid="email-field">{emailPessoa}</h1>
        </span>
        <span>
          <h2 data-testid="total-field">
            Despesa Total:
            { expenses.length > 0 ? expenses[0].value : null }
            {this.expenseCalculator()}
          </h2>
        </span>
        <span data-testid="header-currency-field">
          <h2>BRL</h2>
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailPessoa: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailPessoa: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
