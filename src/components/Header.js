import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.convertion = this.convertion.bind(this);
  }

  convertion() {
    const { expenses } = this.props;
    console.log(expenses);
    if (expenses.length === 0) return 0;
    const somaDespesas = expenses.map((itemGasto) => {
      const cambio = Object.values(itemGasto.exchangeRates)
        .find((buscaCambio) => itemGasto.currency === buscaCambio.code);
      const totalExpenses = Number(itemGasto.value) * Number(cambio.ask);
      return totalExpenses.toFixed(2);
    });
    return somaDespesas.reduce((acc, soma) => (Number(acc) + Number(soma)).toFixed(2));
  }

  render() {
    const { estadoInicial } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ estadoInicial }</h3>
        <h3 data-testid="total-field">
          { this.convertion() }
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}
Header.propTypes = {
  estadoInicial: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  estadoInicial: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
