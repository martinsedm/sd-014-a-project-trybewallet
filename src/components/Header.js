import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../services/style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getMyExpenses = this.getMyExpenses.bind(this);
  }

  getMyExpenses() {
    const { expenses } = this.props;
    const calculateExpenses = expenses.reduce((total, each) => {
      const { value, currency, exchangeRates } = each;
      const rate = parseFloat(exchangeRates[currency].ask);
      return total + parseFloat(value) * rate;
    }, 0);
    return calculateExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header className="ah-header">
        <h1>TrybeWallet by Anna Hamann</h1>
        <p data-testid="email-field">{`E-mail: ${email}`}</p>
        <div>
          <span data-testid="total-field">
            {`Total Expenses: R$ ${this.getMyExpenses()} `}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
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
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps)(Header);
