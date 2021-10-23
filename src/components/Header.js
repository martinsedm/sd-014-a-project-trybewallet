import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.totWalletUpdate = this.totWalletUpdate.bind(this);
  }

  totWalletUpdate() {
    const { expensesRate } = this.props;
    if (expensesRate.length === 0) return '0.00';
    const resultMap = expensesRate.map((expense) => {
      const cambio = Object.values(expense.exchangeRates)
        .find((rate) => expense.currency === rate.code);
      const totExpenses = Number(expense.value) * Number(cambio.ask);
      return totExpenses.toFixed(2);
    });
    return resultMap.reduce((acc, sum) => (Number(acc) + Number(sum)).toFixed(2));
  }

  render() {
    // const { emailUser, totWalletUpdate } = this.props;
    const { emailUser } = this.props;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          {`O e-mail informado foi: ${emailUser}` }

        </p>
        <span>
          Despesa total:
          {/* <p data-testid="total-field">{`R$ ${totWalletUpdate || 0}`}</p> */}
          <p data-testid="total-field">{ this.totWalletUpdate() }</p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </span>

      </header>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  expensesRate: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  totExpenses: state.wallet.tot,
  expensesRate: state.wallet.expenses,
});
// const mapDispatchToProps = () => ({});
// const mapDispatchToProps = (dispatch) => ({
// });

export default connect(mapStateToProps, null)(Header);
