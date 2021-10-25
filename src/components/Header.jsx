import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.expensesTotal = this.expensesTotal.bind(this);
  }

  // código feito e entendido a partir do código do Ilan Aragão
  expensesTotal() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    return expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + (Number(value) * exchangeRates[currency].ask)
    ), 0);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <p
          data-testid="email-field"
        >
          Email:
          {' '}
          { email }
        </p>
        <p
          data-testid="total-field"
        >
          Despesas Totais:
          {' '}
          { this.expensesTotal() }
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
