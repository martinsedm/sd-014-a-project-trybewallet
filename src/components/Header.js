import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, despesas } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Usuário:
          {' '}
          { email }
        </div>
        <div data-testid="total-field">
          Total de despesas:
          {' '}
          {despesas || 0}
        </div>
        <div data-testid="header-currency-field">
          Câmbio:
          {' '}
          BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  exchangeRates: PropTypes.objectOf(),
  moeda: PropTypes.string,
  valor: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.despesas,
});

export default connect(mapStateToProps, null)(Header);
