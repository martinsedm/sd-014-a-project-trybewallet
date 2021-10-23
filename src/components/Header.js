import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.verificaGastos = this.verificaGastos.bind(this);
  }

  verificaGastos() {
    const { gastos } = this.props;
    if (gastos.length === 0) return '0.00';
    const somaDespesas = gastos.map((gasto) => {
      const cambio = Object.values(gasto.exchangeRates)
        .find((rate) => gasto.currency === rate.code);
      const despesaTotal = Number(gasto.value) * Number(cambio.ask);
      return despesaTotal.toFixed(2);
    });
    return somaDespesas.reduce((acc, soma) => (Number(acc) + Number(soma)).toFixed(2));
  }

  render() {
    const { estadoEmail } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          {estadoEmail}
        </h3>
        <h3 data-testid="total-field">
          {' '}
          {this.verificaGastos()}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

Header.propTypes = {
  estadoEmail: PropTypes.string.isRequired,
  gastos: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  // total: PropTypes.any
};

const mapStateToProps = (state) => ({
  estadoEmail: state.user.email,
  total: state.wallet.total,
  gastos: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
